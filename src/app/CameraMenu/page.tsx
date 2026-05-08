'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faImage, faSyncAlt, faArrowLeft, faBolt } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-3xl px-4 pt-10">
                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10 text-center text-emerald-600 text-2xl font-semibold">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center space-y-6 p-4 bg-white dark:bg-zinc-900 rounded-3xl mt-4">
                <div className="w-full flex items-center justify-between px-4 mb-4">
                <Link href="/HomePage" type="button" aria-label="Back" className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-600 flex items-center justify-center shadow cursor-pointer hover:bg-emerald-900 transition-colors">
                    <FontAwesomeIcon icon={faArrowLeft} className="text-lg" />
                </Link>
                    <div className="text-3xl font-semibold text-emerald-600 text-center">Camera</div>
                    <button type="button" aria-label="Toggle flash" className="w-10 h-10 rounded-full bg-emerald-950 text-emerald-600 flex items-center justify-center shadow cursor-pointer hover:bg-emerald-900 transition-colors">
                        <FontAwesomeIcon icon={faBolt} className="text-lg" />
                    </button>
                </div>

                <div className="w-full h-96 bg-gray-300 dark:bg-gray-700 rounded-2xl flex items-center justify-center">
                    <p className="text-gray-500">Camera View</p>
                </div>

                <p className="text-emerald-600 text-center px-6 text-lg font-medium mt-6 leading-relaxed">Align the device in the frame and take a photo</p>

                <div className="flex items-center justify-center space-x-8 mt-12">
                    <button type="button" aria-label="Open gallery" className="w-16 h-16 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-600 shadow-md cursor-pointer hover:scale-105 transition-transform">
                        <FontAwesomeIcon icon={faImage} className="text-xl" />
                    </button>

                    <button type="button" aria-label="Take photo" className="focus:outline-none cursor-pointer">
                        <div className="w-28 h-28 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                            <div className="w-20 h-20 rounded-full bg-emerald-600 flex items-center justify-center">
                                <FontAwesomeIcon icon={faCamera} className="text-3xl text-white" />
                            </div>
                        </div>
                    </button>

                    <button type="button" aria-label="Rotate camera" className="w-16 h-16 rounded-full bg-emerald-950 flex items-center justify-center text-emerald-600 shadow-md cursor-pointer hover:scale-105 transition-transform">
                        <FontAwesomeIcon icon={faSyncAlt} className="text-xl" />
                    </button>
                </div>
            </main>


        </div>
    );
}
