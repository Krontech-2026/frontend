import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faMagnifyingGlass, faClock, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
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
                    
                    <h1 className="text-emerald-600 text-2xl font-semibold">History</h1>
                </div>

                <div className="w-full flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search in history......"
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 rounded-full px-5 py-3 focus:outline-none"
                    />
                    
                    <button className="bg-emerald-600 rounded-full p-3 text-white hover:bg-emerald-700 transition-colors cursor-pointer">
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl" />
                    </button>
                </div>
                
                <div className="w-full flex flex-col space-y-4">
                    <h2 className="text-emerald-600 font-semibold text-lg px-2">Today</h2>
                    
                    <div className="w-full bg-emerald-950 rounded-full px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-2xl" />
                                <div>
                                    <p className="font-medium">How to use yap yap</p>
                                    <p className="text-sm text-gray-400">08:30 PM</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-emerald-400" />
                        </div>
                    </div>
                    
                    <div className="w-full bg-emerald-950 rounded-full px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-2xl" />
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">08:30 PM</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-emerald-400" />
                        </div>
                    </div>
                    
                    <div className="w-full bg-emerald-950 rounded-full px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-2xl" />
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">08:30 PM</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-emerald-400" />
                        </div>
                    </div>
                </div>
                
                <div className="w-full flex flex-col space-y-4">
                    <h2 className="text-emerald-600 font-semibold text-lg px-2">Yesterday</h2>
                    
                    <div className="w-full bg-emerald-950 rounded-full px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-2xl" />
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">08:30 PM</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-emerald-400" />
                        </div>
                    </div>
                    
                    <div className="w-full bg-emerald-950 rounded-full px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-2xl" />
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">08:30 PM</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-emerald-400" />
                        </div>
                    </div>
                    
                    <div className="w-full bg-emerald-950 rounded-full px-5 py-4 text-white">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <FontAwesomeIcon icon={faClock} className="text-emerald-400 text-2xl" />
                                <div>
                                    <p className="font-medium">yap yap</p>
                                    <p className="text-sm text-gray-400">08:30 PM</p>
                                </div>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className="text-emerald-400" />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
