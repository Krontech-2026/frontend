'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faUser, faSliders } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
            <div className="w-full max-w-3xl px-4 pt-10">
                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10 text-center text-emerald-600 text-2xl font-semibold">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-center space-y-6 p-4 bg-white dark:bg-zinc-900 rounded-t-3xl mt-4 pb-32">
                <h1 className="text-3xl font-semibold text-emerald-600 text-center">
                    Profile
                </h1>

                <div className="flex flex-col items-center">
                    <div className="w-32 h-32 rounded-full border-4 border-emerald-600 flex items-center justify-center bg-gray-300 mb-4 overflow-hidden">
                        <FontAwesomeIcon icon={faUser} className="text-gray-500 text-6xl" />
                    </div>
                    <p className="text-2xl font-semibold text-emerald-600">
                        Numele utilizatorului
                    </p>
                </div>

                <button className="bg-emerald-600 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-700 transition-colors text-sm flex items-center gap-2">
                    <FontAwesomeIcon icon={faPencil} className="text-sm" />
                    Edit
                </button>

                <h2 className="text-lg font-semibold text-emerald-600 w-full px-2 mt-6">
                    Personal Information
                </h2>

                <div className="w-full space-y-2">
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        disabled
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none disabled:opacity-60 cursor-not-allowed"
                    />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        disabled
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none disabled:opacity-60 cursor-not-allowed"
                    />
                    <input 
                        type="date" 
                        placeholder="Date of Birth" 
                        disabled
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none disabled:opacity-60 cursor-not-allowed"
                    />
                    <input 
                        type="tel" 
                        placeholder="Phone Number" 
                        disabled
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none disabled:opacity-60 cursor-not-allowed"
                    />
                    <input 
                        type="text" 
                        placeholder="Address" 
                        disabled
                        className="w-full bg-emerald-950 text-white placeholder-gray-400 px-5 py-3 rounded-full focus:outline-none disabled:opacity-60 cursor-not-allowed"
                    />
                </div>
            </main>

            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 items-center">
                <Link href="/HomePage" className="bg-emerald-950 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition-colors flex items-center justify-center">
                    Home
                </Link>
                <button className="bg-emerald-600 text-emerald-950 px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 transition-colors">
                    Profile
                </button>
                <button className="bg-emerald-950 text-emerald-600 rounded-full p-3 hover:bg-emerald-900 transition-colors flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon icon={faSliders} className="text-xl transform rotate-90" />
                </button>
            </div>
        </div>
    );
}
