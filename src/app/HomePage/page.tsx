"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { faMagnifyingGlass, faCamera, faFloppyDisk, faClock, faCalendarDays, faSliders } from '@fortawesome/free-solid-svg-icons';
import {useEffect, useState} from "react";
import { useTranslation } from 'react-i18next';

export default function Home() {
    const { t } = useTranslation();
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
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-4 text-emerald-400 text-3xl font-bold shadow-2xl hover-lift flex justify-between items-center">
                    <Image src="/Logo/SimplexoCircularLogo.png" alt="Simplexo Logo" width={120} height={40} className="object-contain" />
                    <Link href="/UserGuideMenu" className="bg-emerald-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-emerald-400 hover:shadow-lg transition-all active:scale-95 text-sm cursor-pointer">
                        {t('Ghid')}
                    </Link>
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-start space-y-6 p-6 bg-white dark:bg-zinc-900 rounded-3xl mt-6 shadow-2xl overflow-y-auto pb-32">
                <div className="w-full bg-linear-to-br from-emerald-950 to-emerald-900 text-emerald-300 rounded-3xl px-6 py-6 text-lg font-light shadow-md hover-lift">
                    <p className="text-3xl font-bold text-emerald-400 mb-2">{t('Bine ai revenit')},</p>
                    <p className="text-xl font-semibold text-emerald-300">{t('Ce vei învăța să folosești astăzi?')}</p>
                </div>

                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-3xl px-6 py-4 shadow-md">
                    <p className="text-emerald-400 text-lg mb-3 font-semibold">{t('Caută sau scanează')}</p>
                    <div className="flex items-center bg-linear-to-r from-rose-50 to-pink-50 rounded-full overflow-hidden shadow-md hover:shadow-lg transition-all">
                        <input
                            type="text"
                            placeholder={t('Găsește ceva...')}
                            className="flex-1 px-6 py-3 bg-transparent text-emerald-950 placeholder-emerald-400 focus:outline-none font-medium"
                        />
                        <Link href="/SearchItem=EpiPen?from=HomePage" className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white px-5 py-3 rounded-r-full hover:from-emerald-400 hover:to-emerald-500 hover:shadow-lg transition-all active:scale-95 cursor-pointer">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Link>
                    </div>
                </div>

                <div className="w-full bg-white rounded-3xl p-5 flex items-center justify-between shadow-md hover-lift border-2 border-emerald-100">
                    <div>
                        <p className="text-emerald-600 text-sm font-bold uppercase tracking-wider">{t(dateInfo.day)}</p>
                        <p className="text-5xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-500 leading-none">{dateInfo.date}</p>
                        <p className="text-emerald-600 font-semibold">{t(dateInfo.month)} {dateInfo.year}</p>
                    </div>
                    <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-5xl cursor-pointer hover:text-emerald-500 hover:scale-110 transition-all active:scale-95">
                        <FontAwesomeIcon icon={faCalendarDays} />
                    </a>
                </div>

                <div className="w-full grid grid-cols-2 gap-4">
                    <Link href="/CameraMenu" className="bg-linear-to-br from-emerald-950 to-emerald-900 text-emerald-400 rounded-3xl p-6 flex flex-col items-start shadow-lg hover:shadow-2xl transition-all hover-lift group">
                        <FontAwesomeIcon icon={faCamera} className="text-4xl mb-4 group-hover:text-emerald-300 transition-colors" />
                        <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-300 transition-colors">{t('Cameră')}</h3>
                        <p className="text-sm text-emerald-300 group-hover:text-emerald-200 transition-colors">{t('Fă o poză')}</p>
                    </Link>

                    <Link href="/SavedInfoMenu" className="bg-linear-to-br from-emerald-950 to-emerald-900 text-emerald-400 rounded-3xl p-6 flex flex-col items-start shadow-lg hover:shadow-2xl transition-all hover-lift group">
                        <FontAwesomeIcon icon={faFloppyDisk} className="text-4xl mb-4 group-hover:text-emerald-300 transition-colors" />
                        <h3 className="text-xl font-bold mb-1 group-hover:text-emerald-300 transition-colors">{t('Salvate')}</h3>
                        <p className="text-sm text-emerald-300 group-hover:text-emerald-200 transition-colors">{t('Salvările tale')}</p>
                    </Link>
                </div>

                <Link href="/HistoryMenu" className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 text-emerald-400 rounded-3xl p-6 flex items-center justify-between shadow-lg hover:shadow-2xl transition-all hover-lift group">
                    <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-300 transition-colors">{t('Istoric')}</h3>
                        <p className="text-sm text-emerald-300 group-hover:text-emerald-200 transition-colors">{t('Vezi scanările recente')}</p>
                    </div>
                    <FontAwesomeIcon icon={faClock} className="text-6xl text-emerald-600 group-hover:text-emerald-500 group-hover:scale-110 transition-all" />
                </Link>
            </main>

            <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-4 items-center">
                <button className="bg-emerald-600 text-emerald-950 px-8 py-3 rounded-full font-semibold hover:bg-emerald-500 transition-colors">
                    {t('Acasă')}
                </button>
                <Link href="/UserProfileMenu" className="bg-emerald-950 text-emerald-600 px-8 py-3 rounded-full font-semibold hover:bg-emerald-900 transition-colors">
                    {t('Profil')}
                </Link>
                <Link href="/SettingsMenu" className="bg-emerald-950 text-emerald-600 rounded-full p-3 hover:bg-emerald-900 transition-colors flex items-center justify-center cursor-pointer">
                    <FontAwesomeIcon icon={faSliders} className="text-xl transform rotate-90" />
                </Link>
            </div>
        </div>
    );
}
