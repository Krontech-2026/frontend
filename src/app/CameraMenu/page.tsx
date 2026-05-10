'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faImage, faSyncAlt, faArrowLeft, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function CameraMenu() {
    return (
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans dark:bg-black min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl hover-lift">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center space-y-6 p-4 bg-white dark:bg-zinc-900 rounded-3xl mt-6 shadow-2xl">
                <div className="w-full flex items-center justify-between px-4 mb-6 pb-4 border-b-2 border-emerald-100">
                    <Link href="/HomePage" aria-label="Back" className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-950 to-emerald-900 text-emerald-400 flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl hover:scale-110 transition-all active:scale-95">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                    </Link>
                    <div className="text-4xl font-bold text-emerald-600 text-center">Camera</div>
                    <button type="button" aria-label="Toggle flash" className="w-12 h-12 rounded-full bg-linear-to-br from-emerald-950 to-emerald-900 text-yellow-400 flex items-center justify-center shadow-lg cursor-pointer hover:shadow-xl hover:scale-110 transition-all active:scale-95 animate-pulse">
                        <FontAwesomeIcon icon={faBolt} className="text-lg" />
                    </button>
                </div>

                <div className="w-full h-96 bg-linear-to-b from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-800 rounded-3xl flex items-center justify-center shadow-lg border-4 border-emerald-100 relative overflow-hidden">
                    <div className="absolute inset-0 border-4 border-emerald-400 opacity-20 m-8 rounded-2xl animate-pulse"></div>
                    <p className="text-gray-600 dark:text-gray-300 font-semibold text-lg">📷 Camera View</p>
                </div>

                <p className="text-emerald-600 text-center px-6 text-lg font-bold mt-6 leading-relaxed">
                    ✨ Align the item in the frame and take a photo
                </p>

                <div className="flex items-center justify-center space-x-8 mt-12 pb-6">
                    <button type="button" aria-label="Open gallery" className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-950 to-emerald-900 flex items-center justify-center text-emerald-400 shadow-lg cursor-pointer hover:shadow-xl hover:scale-125 transition-all active:scale-95">
                        <FontAwesomeIcon icon={faImage} className="text-2xl" />
                    </button>

                    <button type="button" aria-label="Take photo" className="focus:outline-none cursor-pointer">
                        <div className="w-32 h-32 rounded-full bg-linear-to-br from-white to-gray-100 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all hover:scale-110 active:scale-95 border-4 border-emerald-400">
                            <div className="w-24 h-24 rounded-full bg-linear-to-br from-emerald-500 to-emerald-600 flex items-center justify-center animate-pulse">
                                <FontAwesomeIcon icon={faCamera} className="text-4xl text-white" />
                            </div>
                        </div>
                    </button>

                    <button type="button" aria-label="Rotate camera" className="w-16 h-16 rounded-full bg-linear-to-br from-emerald-950 to-emerald-900 flex items-center justify-center text-emerald-400 shadow-lg cursor-pointer hover:shadow-xl hover:scale-125 transition-all active:scale-95 hover:rotate-180">
                        <FontAwesomeIcon icon={faSyncAlt} className="text-2xl" />
                    </button>
                </div>
            </main>
        </div>
    );
}
