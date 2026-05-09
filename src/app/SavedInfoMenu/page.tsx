'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMagnifyingGlass, faBookmark, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Home() {
    const router = useRouter();

    const handleItemClick = () => {
        router.push('/ScannedItemPage?from=SavedInfoMenu');
    };
    return (
        <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-3xl px-4 pt-10">
                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10 text-center text-emerald-600 text-2xl font-semibold">
                    Simplexo
                </div>
            </div>
            
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center space-y-6 p-4 bg-white dark:bg-zinc-900 rounded-t-3xl mt-4">
                <div className="w-full flex items-center justify-center relative py-2">
                    <Link href="/HomePage" className="absolute left-4">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-emerald-600 text-2xl cursor-pointer" />
                    </Link>
                    
                    <h1 className="text-emerald-600 text-2xl font-semibold">Saved Info</h1>
                </div>

                <div className="w-full flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search in saved info......"
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 rounded-full px-5 py-3 focus:outline-none"
                    />
                    
                    <button className="bg-emerald-600 rounded-full p-3 text-white hover:bg-emerald-700 transition-colors cursor-pointer">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                    </button>
                </div>
                
                <div className="w-full flex flex-col space-y-4">
                    <div className="w-full bg-emerald-950 rounded-2xl p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">Photo</span>
                                </div>
                                <div>
                                    <p className="font-medium">How to use yap yap</p>
                                    <p className="text-sm text-gray-400">26 Aprilie 2026</p>
                                </div>
                            </div>
                            <button onClick={handleItemClick} className="text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="w-full bg-emerald-950 rounded-2xl p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">Photo</span>
                                </div>
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">25 Aprilie 2026</p>
                                </div>
                            </div>
                            <button onClick={handleItemClick} className="text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                    
                    <div className="w-full bg-emerald-950 rounded-2xl p-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-24 h-24 bg-gray-700 rounded-lg flex items-center justify-center">
                                    <span className="text-gray-400">Photo</span>
                                </div>
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">24 Aprilie 2026</p>
                                </div>
                            </div>
                            <button onClick={handleItemClick} className="text-emerald-400 cursor-pointer hover:text-emerald-300 transition-colors">
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}