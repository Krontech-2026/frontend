'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

const SettingSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 text-white p-6 rounded-3xl shadow-lg">
        <h2 className="text-2xl font-bold text-emerald-300 mb-4">{title}</h2>
        <div className="flex items-center gap-4">
            {children}
        </div>
    </div>
);

export default function SettingsMenu() {
    const { t, i18n } = useTranslation();
    const [theme, setTheme] = useState('system');

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl hover-lift">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-start space-y-8 p-6 bg-white dark:bg-zinc-900 rounded-3xl mt-6 shadow-2xl pb-20 overflow-y-auto">
                <div className="w-full flex items-center justify-center relative py-4 border-b-2 border-emerald-100">
                    <Link href="/HomePage" className="absolute left-0 hover-scale">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-emerald-600 text-2xl cursor-pointer hover:text-emerald-500 transition-colors" />
                    </Link>
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-500 text-center">
                        ⚙️ {t('Settings')}
                    </h1>
                </div>

                <SettingSection title={t('Theme')}>
                    <button 
                        onClick={() => setTheme('light')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${theme === 'light' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        {t('Light')}
                    </button>
                    <button 
                        onClick={() => setTheme('dark')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${theme === 'dark' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        {t('Dark')}
                    </button>
                    <button 
                        onClick={() => setTheme('system')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${theme === 'system' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        {t('System')}
                    </button>
                </SettingSection>

                <SettingSection title={t('Language')}>
                    <button 
                        onClick={() => changeLanguage('en')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${i18n.language === 'en' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        English
                    </button>
                    <button 
                        onClick={() => changeLanguage('ro')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${i18n.language === 'ro' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        Română
                    </button>
                    <button 
                        onClick={() => changeLanguage('de')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${i18n.language === 'de' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        Deutsch
                    </button>
                    <button 
                        onClick={() => changeLanguage('fr')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${i18n.language === 'fr' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        Français
                    </button>
                    <button 
                        onClick={() => changeLanguage('es')}
                        className={`px-6 py-2 rounded-full font-semibold transition-all ${i18n.language === 'es' ? 'bg-emerald-500 text-white shadow-lg' : 'bg-gray-200 text-gray-800 cursor-pointer'}`}
                    >
                        Español
                    </button>
                </SettingSection>
            </main>
        </div>
    );
}
