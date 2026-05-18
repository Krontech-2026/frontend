'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMagnifyingGlass, faClock, faChevronRight, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Home() {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const handleItemClick = () => {
        router.push('/ScannedItemPage?from=HistoryMenu');
    };

    return (
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans dark:bg-black min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl hover-lift">
                    Simplexo
                </div>
            </div>
            
            <main className="flex flex-1 w-full max-w-3xl flex-col items-start space-y-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl mt-6 shadow-2xl overflow-y-auto">
                <div className="w-full flex items-center justify-center relative py-4 border-b-2 border-emerald-100">
                    <Link href="/HomePage" className="absolute left-0 hover-scale">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-emerald-600 text-2xl cursor-pointer hover:text-emerald-500 transition-colors" />
                    </Link>
                    <h1 className="text-emerald-600 text-3xl font-bold">Istoric</h1>
                </div>

                <div className="w-full flex items-center space-x-2">
                    <div className="flex-1 flex items-center bg-linear-to-r from-emerald-950 to-emerald-900 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all">
                        <input
                            type="text"
                            placeholder="Caută scanările tale..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-transparent text-white placeholder-emerald-300 rounded-full px-6 py-3 focus:outline-none font-medium"
                        />
                    </div>
                    
                    <button className="bg-linear-to-r from-emerald-500 to-emerald-600 rounded-full p-4 text-white hover:from-emerald-400 hover:to-emerald-500 hover:shadow-lg transition-all active:scale-95 cursor-pointer shadow-md">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                    </button>
                </div>
                
                <div className="w-full flex flex-col space-y-4">
                    <h2 className="text-emerald-600 font-bold text-lg px-2 flex items-center gap-2">
                        <span className="text-xl"></span> Azi
                    </h2>
                    
                    {[...Array(3)].map((_, i) => (
                        <div key={`today-${i}`} className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-2xl px-6 py-4 text-white shadow-lg hover:shadow-xl hover-lift transition-all group">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 flex-1">
                                    <div className="text-emerald-400 text-3xl group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faClock} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-lg group-hover:text-emerald-300 transition-colors">Cum să folosești...</p>
                                        <p className="text-sm text-emerald-300">08:30 PM</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={handleItemClick} 
                                    className="text-emerald-400 cursor-pointer hover:text-emerald-300 hover:scale-125 transition-all active:scale-95"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="w-full flex flex-col space-y-4 mt-6">
                    <h2 className="text-emerald-600 font-bold text-lg px-2 flex items-center gap-2">
                        <span className="text-xl"></span> Ieri
                    </h2>
                    
                    {[...Array(3)].map((_, i) => (
                        <div key={`yesterday-${i}`} className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-2xl px-6 py-4 text-white shadow-lg hover:shadow-xl hover-lift transition-all group">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 flex-1">
                                    <div className="text-emerald-400 text-3xl group-hover:scale-110 transition-transform">
                                        <FontAwesomeIcon icon={faClock} />
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-lg group-hover:text-emerald-300 transition-colors">Lorem ipsum dolor sit amet...</p>
                                        <p className="text-sm text-emerald-300">08:30 PM · Ieri</p>
                                    </div>
                                </div>
                                <button 
                                    onClick={handleItemClick} 
                                    className="text-emerald-400 cursor-pointer hover:text-emerald-300 hover:scale-125 transition-all active:scale-95"
                                >
                                    <FontAwesomeIcon icon={faChevronRight} className="text-xl" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="w-full mt-8 bg-linear-to-r from-red-500 to-red-600 rounded-full py-4 text-white font-bold hover:from-red-400 hover:to-red-500 hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2 shadow-md cursor-pointer">
                    <FontAwesomeIcon icon={faTrash} />
                    Șterge istoricul
                </button>
            </main>
        </div>
    );
}
