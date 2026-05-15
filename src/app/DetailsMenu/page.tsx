'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSliders, faCircleInfo, faArrowRight, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center space-y-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold">
                    Simplexo
                </div>

                <button className="w-full bg-white border-2 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold cursor-pointer">
                    <div className="w-1 flex flex-row">
                        <div className="rotate-90">
                            <FontAwesomeIcon icon={faSliders}/>
                        </div>

                        Settings
                    </div>
                </button>

                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold">
                    <div className="flex flex-row justify-between">
                        <span><FontAwesomeIcon icon={faCircleInfo}/> Version</span>
                        <span>1.1.0</span></div>
                </div>

                <Link href="/HomePage" className="w-full">
                <button className="w-full bg-emerald-950 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold cursor-pointer">
                    <div className="flex flex-row justify-between">
                        <span><FontAwesomeIcon icon={faArrowRight}/> Return</span>
                    </div>
                </button>
                </Link>

                <Link href="/StartPage" className="w-full">
                <button className="w-full bg-emerald-950 rounded-4xl px-6 py-10 text-red-900 text-2xl font-semibold cursor-pointer">
                    <div className="flex flex-row justify-between">
                        <span><FontAwesomeIcon icon={faArrowRightFromBracket}/> Log out</span>
                    </div>
                </button>
                </Link>
            </main>
        </div>
    );
}