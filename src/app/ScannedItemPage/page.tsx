'use client';
import React, { Suspense, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart, faImage } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';

const InfoSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-300 mb-3">{title}</h2>
        <div className="space-y-2 text-emerald-100 leading-relaxed">
            {children}
        </div>
    </div>
);

function ScannedItemContent() {
    const [isFilled, setIsFilled] = useState(false);
    const searchParams = useSearchParams();
    const router = useRouter();

    const from = searchParams.get('from');
    const backLink = from === 'SavedInfoMenu' ? '/SavedInfoMenu' : '/HistoryMenu';

    const toggleHeart = () => setIsFilled(!isFilled);
    const handleBack = () => router.push(backLink);

    return (
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl hover-lift">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-start space-y-8 p-6 bg-white dark:bg-zinc-900 rounded-3xl mt-6 shadow-2xl pb-20 overflow-y-auto">
                <div className="w-full flex items-center justify-center relative py-4 border-b-2 border-emerald-100">
                    <button onClick={handleBack} className="absolute left-0 hover-scale">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-emerald-600 text-2xl cursor-pointer hover:text-emerald-500 transition-colors" />
                    </button>
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-500 text-center">
                        Scanned Item
                    </h1>
                    <button onClick={toggleHeart} className="absolute right-0 text-emerald-600 text-3xl cursor-pointer hover:text-red-500 transition-all duration-300 hover:scale-110 active:scale-95">
                        <FontAwesomeIcon icon={isFilled ? faHeart : faHeartEmpty} />
                    </button>
                </div>

                <div className="w-full h-72 bg-linear-to-br from-gray-400 to-gray-600 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-emerald-200">
                    <FontAwesomeIcon icon={faImage} className="text-white text-8xl opacity-50" />
                </div>

                <div className="w-full space-y-6">
                    <InfoSection title="ℹ️ About">
                        <p>Just a mad cat yap yap yap</p>
                    </InfoSection>

                    <InfoSection title="📖 How to use">
                        <ul className="list-disc list-inside space-y-2">
                            <li>We don&apos;t use a cot wtf</li>
                            <li>We use a medical device</li>
                            <li>We usually feed and pet the cat</li>
                        </ul>
                    </InfoSection>

                    <InfoSection title="🤔 When to use?">
                        <p>Every single day.</p>
                    </InfoSection>
                </div>
            </main>
        </div>
    );
}

export default function ScannedItemPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950" />}>
            <ScannedItemContent />
        </Suspense>
    );
}
