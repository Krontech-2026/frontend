'use client';
import { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartEmpty } from '@fortawesome/free-regular-svg-icons';

export default function Home() {
    const [isFilled, setIsFilled] = useState(false);
    const [backLink, setBackLink] = useState('/HistoryMenu');
    const searchParams = useSearchParams();
    const router = useRouter();

    useEffect(() => {
        const from = searchParams.get('from');
        if (from === 'SavedInfoMenu') {
            setBackLink('/SavedInfoMenu');
        } else if (from === 'HistoryMenu') {
            setBackLink('/HistoryMenu');
        }
    }, [searchParams]);

    const toggleHeart = () => {
        setIsFilled(!isFilled);
    };

    const handleBack = () => {
        router.push(backLink);
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-emerald-950 font-sans p-6">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl">
                <div className="space-y-6">
                    <div className="bg-emerald-950 text-emerald-300 rounded-2xl px-6 py-4 text-2xl font-light text-center">
                        Simplexo
                    </div>

                    <div className="flex items-center justify-between">
                        <button onClick={handleBack} className="text-emerald-600 text-2xl cursor-pointer">
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </button>
                        <h1 className="text-emerald-600 text-2xl font-semibold flex-1 text-center">
                            Item
                        </h1>
                        <button onClick={toggleHeart} className="text-emerald-600 text-2xl cursor-pointer transition-all duration-200">
                            <FontAwesomeIcon icon={isFilled ? faHeart : faHeartEmpty} />
                        </button>
                    </div>

                    <div className="bg-emerald-950 rounded-2xl p-6 h-64 flex items-center justify-center">
                        <p className="text-emerald-300 text-2xl font-light">Scanned Item</p>
                    </div>

                    <div>
                        <h2 className="text-emerald-600 text-lg font-semibold mb-2">About</h2>
                        <p className="text-emerald-950 text-base">Just a mad cat yap yap yap</p>
                    </div>

                    <div>
                        <h2 className="text-emerald-600 text-lg font-semibold mb-2">How to use</h2>
                        <p className="text-emerald-950 text-base">
                            1.we dont use a cot wtf<br/>
                            2.we use a medical device<br/>
                            3.we usually feed and pet the cat
                        </p>
                    </div>

                    <div>
                        <h2 className="text-emerald-600 text-lg font-semibold mb-2">When to use?</h2>
                        <p className="text-emerald-950 text-base">Every single day.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
