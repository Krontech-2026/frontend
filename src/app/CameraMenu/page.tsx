'use client';

import { useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCamera, faImage, faSyncAlt, faArrowLeft, faBolt,
    faSpinner, faCheckCircle, faExclamationTriangle, faTimes,
    faStethoscope, faInfoCircle, faListUl
} from '@fortawesome/free-solid-svg-icons';

interface DeviceResult {
    device_name: string;
    description: string;
    how_to_use: string[];
    warnings: string[];
    category: string;
}

export default function CameraMenu() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [stream, setStream] = useState<MediaStream | null>(null);
    const [cameraActive, setCameraActive] = useState(false);
    const [facingMode, setFacingMode] = useState<'user' | 'environment'>('environment');
    const [flashOn, setFlashOn] = useState(false);
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState<DeviceResult | null>(null);
    const [error, setError] = useState<string | null>(null);

    const analyzeImage = useCallback(async (dataUrl: string) => {
        setLoading(true);
        setResult(null);
        setError(null);

        try {
            const base64 = dataUrl.split(',')[1];
            const mimeMatch = dataUrl.match(/data:(.*?);base64/);
            const mimeType = mimeMatch ? mimeMatch[1] : 'image/jpeg';

            const response = await fetch('http://localhost:8000/analyze', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ image: base64, mime_type: mimeType }),
            });

            if (!response.ok) {
                const err = await response.json();
                throw new Error(err.detail || 'Eroare server');
            }

            const data: DeviceResult = await response.json();
            setResult(data);
        } catch (err: unknown) {
            const msg = err instanceof Error ? err.message : 'Eroare necunoscută';
            setError(msg);
        } finally {
            setLoading(false);
        }
    }, []);

    const startCamera = useCallback(async () => {
        try {
            if (stream) stream.getTracks().forEach(t => t.stop());
            const newStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode, width: { ideal: 1280 }, height: { ideal: 720 } }
            });
            setStream(newStream);
            if (videoRef.current) videoRef.current.srcObject = newStream;
            setCameraActive(true);
            setResult(null);
            setError(null);
            setCapturedImage(null);
        } catch (err) {
            console.error('Camera error:', err);
            setError('Nu s-a putut accesa camera. Verificați permisiunile.');
        }
    }, [facingMode, stream]);

    const stopCamera = useCallback(() => {
        if (stream) {
            stream.getTracks().forEach(t => t.stop());
            setStream(null);
        }
        setCameraActive(false);
    }, [stream]);

    const rotateCamera = useCallback(async () => {
        const newFacing = facingMode === 'environment' ? 'user' : 'environment';
        setFacingMode(newFacing);
        if (cameraActive) {
            if (stream) stream.getTracks().forEach(t => t.stop());
            try {
                const newStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: newFacing }
                });
                setStream(newStream);
                if (videoRef.current) videoRef.current.srcObject = newStream;
            } catch {
                setError('Nu s-a putut roti camera.');
            }
        }
    }, [facingMode, cameraActive, stream]);

    const capturePhoto = useCallback(() => {
        if (!videoRef.current || !canvasRef.current) return;
        const video = videoRef.current;
        const canvas = canvasRef.current;
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(video, 0, 0);
        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setCapturedImage(dataUrl);
        stopCamera();
        analyzeImage(dataUrl);
    }, [stopCamera, analyzeImage]);

    const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        e.target.value = '';
        const reader = new FileReader();
        reader.onload = (ev) => {
            const dataUrl = ev.target?.result as string;
            setCapturedImage(dataUrl);
            setCameraActive(false);
            if (stream) {
                stream.getTracks().forEach(t => t.stop());
                setStream(null);
            }
            analyzeImage(dataUrl);
        };
        reader.readAsDataURL(file);
    }, [stream, analyzeImage]);

    const reset = () => {
        setCapturedImage(null);
        setResult(null);
        setError(null);
        setCameraActive(false);
        if (stream) { stream.getTracks().forEach(t => t.stop()); setStream(null); }
    };

    return (
        <div className="flex flex-col flex-1 items-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans dark:bg-black min-h-screen">
            <canvas ref={canvasRef} className="hidden" />
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-gradient-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-center space-y-6 p-4 bg-white dark:bg-zinc-900 rounded-3xl mt-6 mb-6 shadow-2xl">
                <div className="w-full flex items-center justify-between px-4 pb-4 border-b-2 border-emerald-100">
                    <Link href="/HomePage" aria-label="Back"
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-950 to-emerald-900 text-emerald-400 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all active:scale-95">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                    </Link>
                    <div className="text-4xl font-bold text-emerald-600 text-center">Camera</div>
                    <button
                        type="button"
                        aria-label="Toggle flash"
                        onClick={() => setFlashOn(f => !f)}
                        className={`w-12 h-12 rounded-full bg-gradient-to-br from-emerald-950 to-emerald-900 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all active:scale-95 ${flashOn ? 'text-yellow-300' : 'text-yellow-600'}`}>
                        <FontAwesomeIcon icon={faBolt} className="text-lg" />
                    </button>
                </div>
                <div className="w-full rounded-3xl overflow-hidden border-4 border-emerald-100 relative bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800"
                    style={{ minHeight: '320px', maxHeight: '400px' }}>

                    {cameraActive && !capturedImage && (
                        <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            muted
                            className="w-full h-full object-cover"
                            style={{ maxHeight: '400px' }}
                        />
                    )}

                    {capturedImage && (
                        <img
                            src={capturedImage}
                            alt="Captured"
                            className="w-full object-contain"
                            style={{ maxHeight: '400px', background: '#f3f4f6' }}
                        />
                    )}

                    {!cameraActive && !capturedImage && (
                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                            <div className="absolute inset-0 border-4 border-emerald-400 opacity-20 m-8 rounded-2xl animate-pulse" />
                            <FontAwesomeIcon icon={faCamera} className="text-5xl text-gray-400" />
                            <p className="text-gray-500 dark:text-gray-300 font-semibold text-base">
                                Apăsați butonul pentru a începe
                            </p>
                        </div>
                    )}

                    {capturedImage && (
                        <button
                            onClick={reset}
                            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/80 transition-all"
                            aria-label="Resetează">
                            <FontAwesomeIcon icon={faTimes} />
                        </button>
                    )}
                </div>
                {!capturedImage && !loading && (
                    <p className="text-emerald-600 text-center px-6 text-base font-semibold leading-relaxed">
                        {cameraActive
                            ? '✨ Aliniați dispozitivul medical în cadru și fotografiați'
                            : '📷 Activați camera sau încărcați o imagine din galerie'}
                    </p>
                )}
                {!capturedImage && (
                    <div className="flex items-center justify-center space-x-8 pb-4">
                        <label
                            htmlFor="gallery-input"
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-950 to-emerald-900 flex items-center justify-center text-emerald-400 shadow-lg hover:shadow-xl hover:scale-125 transition-all active:scale-95 cursor-pointer">
                            <FontAwesomeIcon icon={faImage} className="text-2xl" />
                            <input
                                id="gallery-input"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                        </label>
                        <button type="button" aria-label="Take photo"
                            onClick={cameraActive ? capturePhoto : startCamera}
                            className="focus:outline-none cursor-pointer">
                            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-white to-gray-100 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all hover:scale-110 active:scale-95 border-4 border-emerald-400">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center animate-pulse">
                                    <FontAwesomeIcon icon={faCamera} className="text-4xl text-white" />
                                </div>
                            </div>
                        </button>
                        <button type="button" aria-label="Rotate camera" onClick={rotateCamera}
                            className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-950 to-emerald-900 flex items-center justify-center text-emerald-400 shadow-lg hover:shadow-xl hover:scale-125 transition-all active:scale-95 hover:rotate-180">
                            <FontAwesomeIcon icon={faSyncAlt} className="text-2xl" />
                        </button>
                    </div>
                )}
                {loading && (
                    <div className="w-full flex flex-col items-center gap-3 py-6">
                        <FontAwesomeIcon icon={faSpinner} className="text-4xl text-emerald-500 animate-spin" />
                        <p className="text-emerald-600 font-semibold">Se analizează dispozitivul medical...</p>
                    </div>
                )}
                {error && (
                    <div className="w-full bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-start gap-3">
                        <FontAwesomeIcon icon={faExclamationTriangle} className="text-red-500 mt-0.5 shrink-0" />
                        <div>
                            <p className="font-semibold text-red-700 dark:text-red-300">Eroare</p>
                            <p className="text-sm text-red-600 dark:text-red-400 mt-1">{error}</p>
                        </div>
                    </div>
                )}
                {result && (
                    <div className="w-full space-y-4 pb-4">
                        <div className="bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-2xl p-4 flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                                <FontAwesomeIcon icon={faStethoscope} className="text-white text-lg" />
                            </div>
                            <div>
                                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium uppercase tracking-wide">{result.category}</p>
                                <p className="text-xl font-bold text-emerald-800 dark:text-emerald-200">{result.device_name}</p>
                            </div>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-emerald-500 text-xl ml-auto" />
                        </div>

                        <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-2">
                                <FontAwesomeIcon icon={faInfoCircle} className="text-emerald-500" />
                                <p className="font-semibold text-gray-800 dark:text-gray-200">Descriere</p>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{result.description}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-zinc-800 rounded-2xl p-4">
                            <div className="flex items-center gap-2 mb-3">
                                <FontAwesomeIcon icon={faListUl} className="text-emerald-500" />
                                <p className="font-semibold text-gray-800 dark:text-gray-200">Cum se folosește</p>
                            </div>
                            <ol className="space-y-2">
                                {result.how_to_use.map((step, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="min-w-[24px] h-6 rounded-full bg-emerald-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
                                            {i + 1}
                                        </span>
                                        <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step}</span>
                                    </li>
                                ))}
                            </ol>
                        </div>

                        {result.warnings.length > 0 && (
                            <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-2xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <FontAwesomeIcon icon={faExclamationTriangle} className="text-amber-500" />
                                    <p className="font-semibold text-amber-800 dark:text-amber-200">Avertismente</p>
                                </div>
                                <ul className="space-y-2">
                                    {result.warnings.map((w, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <span className="text-amber-500 mt-1">•</span>
                                            <span className="text-sm text-amber-700 dark:text-amber-300 leading-relaxed">{w}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        <button
                            onClick={reset}
                            className="w-full py-3 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold text-base shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all active:scale-95">
                            Scanează alt dispozitiv
                        </button>
                    </div>
                )}
            </main>
        </div>
    );
}