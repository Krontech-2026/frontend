"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faMagnifyingGlass, faCamera, faFloppyDisk, faClock, faCalendarDays, faSliders } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

export default function Home() {
    const [dateInfo, setDateInfo] = useState({
        day: "Saturday",
        date: 9,
        month: "May",
        year: 2026
    });

    useEffect(() => {
        const updateDate = () => {
            const now = new Date();
            const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

            setDateInfo({
                day: days[now.getDay()],
                date: now.getDate(),
                month: months[now.getMonth()],
                year: now.getFullYear()
            });
        };

        updateDate();

        return
    }, []);

    return (
        <div className="flex items-center justify-center min-h-screen bg-emerald-950 font-sans p-6">
            <div className="w-full max-w-md bg-white rounded-3xl p-6 shadow-xl">
                <div className="space-y-4">
                    <div className="bg-emerald-950 text-emerald-300 rounded-2xl px-6 py-4 text-2xl font-light">
                        Simplexo
                    </div>

                    <div className="bg-emerald-950 text-emerald-300 rounded-2xl px-6 py-6 text-lg font-light">
                        <p className="text-2xl font-semibold text-emerald-400 mb-2">User,</p>
                        <p className="text-2xl font-semibold text-emerald-400">Welcome back.</p>
                    </div>

                    <div className="bg-emerald-950 rounded-2xl px-6 py-4">
                        <p className="text-emerald-400 text-lg mb-3 font-light">How can I help you?</p>
                        <div className="flex items-center bg-rose-50 rounded-full overflow-hidden">
                            <input
                                type="text"
                                placeholder=""
                                className="flex-1 px-6 py-3 bg-rose-50 text-emerald-950 placeholder-emerald-400 focus:outline-none"
                            />
                            <button className="bg-emerald-600 text-white px-5 py-3 rounded-r-full hover:bg-emerald-700 transition-colors cursor-pointer">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-2xl p-4 flex items-center justify-between">
                        <div>
                            <p className="text-emerald-600 text-sm font-semibold">{dateInfo.day.toUpperCase()}</p>
                            <p className="text-5xl font-bold text-emerald-600 leading-none">{dateInfo.date}</p>
                            <p className="text-emerald-600">{dateInfo.month} {dateInfo.year}</p>
                        </div>
                        <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-4xl cursor-pointer hover:text-emerald-700 transition-colors">
                            <FontAwesomeIcon icon={faCalendarDays} />
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/CameraMenu" className="bg-emerald-950 text-emerald-400 rounded-2xl p-6 flex flex-col items-start">
                            <FontAwesomeIcon icon={faCamera} className="text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-1">Camera</h3>
                            <p className="text-sm text-emerald-300">Take a photo</p>
                        </Link>

                        <Link href="/SavedInfoMenu" className="bg-emerald-950 text-emerald-400 rounded-2xl p-6 flex flex-col items-start">
                            <FontAwesomeIcon icon={faFloppyDisk} className="text-3xl mb-4" />
                            <h3 className="text-xl font-semibold mb-1">Saved Info</h3>
                            <p className="text-sm text-emerald-300">View your saved info</p>
                        </Link>
                    </div>

                    <Link href="/HistoryMenu" className="bg-emerald-950 text-emerald-400 rounded-2xl p-6 flex items-center justify-between">
                        <div>
                            <h3 className="text-2xl font-semibold mb-2">History</h3>
                            <p className="text-sm text-emerald-300">View your last searches</p>
                        </div>
                        <FontAwesomeIcon icon={faClock} className="text-6xl text-emerald-600" />
                    </Link>

                    <div className="flex gap-4 items-center justify-center">
                        <Link href="/HomePage" className="bg-emerald-600 text-emerald-950 px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 transition-colors flex items-center justify-center">
                            Home
                        </Link>
                        <Link href="/UserProfileMenu" className="bg-emerald-950 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition-colors">
                            Profile
                        </Link>
                        <button className="bg-emerald-950 text-emerald-600 rounded-full p-3 hover:bg-emerald-900 transition-colors flex items-center justify-center cursor-pointer">
                            <FontAwesomeIcon icon={faSliders} className="text-xl transform rotate-90" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
