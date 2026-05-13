'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUsers, faUniversalAccess, faLightbulb, faBookOpen, faHeadset, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import Image from 'next/image';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useTranslation } from 'react-i18next';

const Chapter = ({ icon, title, number, children }: { icon: IconDefinition, title: string, number: number, children: React.ReactNode }) => (
    <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 text-white p-6 rounded-3xl shadow-lg hover:shadow-2xl hover-lift transition-all group">
        <div className="flex items-start gap-4">
            <div className="bg-linear-to-br from-emerald-500 to-emerald-600 rounded-full p-4 flex items-center justify-center text-2xl shadow-md group-hover:scale-110 transition-transform min-w-fit">
                <FontAwesomeIcon icon={icon} className="text-white" />
            </div>
            <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                    <span className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-bold">Step {number}</span>
                </div>
                <h2 className="text-2xl font-bold text-emerald-300 mb-3 group-hover:text-emerald-200 transition-colors">{title}</h2>
                <div className="space-y-2 text-emerald-100 leading-relaxed">
                    {children}
                </div>
            </div>
        </div>
    </div>
);

const Slideshow = () => {
    const { t } = useTranslation();
    const translatedSlides = t('userGuide.step4.slides', { returnObjects: true });
    const slides = Array.isArray(translatedSlides)
        ? (translatedSlides as { src?: string, title: string, description: string }[]).map((slide, index) => ({
            ...slide,
            src: slide.src || `/AppGuide/${index + 1}.png`,
        }))
        : [];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                {slides.map((slide, index) => (
                    <div
                        key={`${slide.src}-${index}`}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image src={slide.src} alt={`Slide ${index + 1}`} fill className="object-contain" />
                    </div>
                ))}
            </div>
            <div className="flex justify-between items-center mt-4">
                <button onClick={handlePrev} className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <p className="text-lg font-semibold text-emerald-600">
                    Slide {currentIndex + 1} of {slides.length}
                </p>
                <button onClick={handleNext} className="bg-emerald-600 text-white p-3 rounded-full hover:bg-emerald-700 transition-colors">
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
            <div className="mt-4 space-y-4">
                <div className="p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50">
                    <p className="text-lg font-bold text-emerald-800">{slides[currentIndex].title}</p>
                </div>
                <div className="p-4 rounded-2xl border-2 border-emerald-200 bg-emerald-50">
                    <div className="text-emerald-900" dangerouslySetInnerHTML={{ __html: slides[currentIndex].description }} />
                </div>
            </div>
        </div>
    );
};

export default function AboutUs() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col flex-1 items-center bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-950 font-sans dark:bg-black min-h-screen">
            <div className="w-full max-w-3xl px-4 pt-8">
                <div className="w-full bg-linear-to-r from-emerald-950 to-emerald-900 rounded-4xl px-6 py-10 text-center text-emerald-400 text-3xl font-bold shadow-2xl hover-lift">
                    Simplexo
                </div>
            </div>

            <main className="flex flex-1 w-full max-w-3xl flex-col items-start space-y-8 p-6 bg-white dark:bg-zinc-900 rounded-t-3xl mt-6 shadow-2xl pb-20 overflow-y-auto">
                <div className="w-full flex items-center justify-center relative py-4 border-b-2 border-emerald-100">
                    <Link href="/HomePage" className="absolute left-0 hover-scale">
                        <FontAwesomeIcon icon={faArrowLeft} className="text-emerald-600 text-2xl cursor-pointer hover:text-emerald-500 transition-colors" />
                    </Link>
                    <h1 className="text-4xl font-black text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-emerald-500 text-center">
                        📚 {t('userGuide.title')}
                    </h1>
                </div>

                <div className="w-full bg-linear-to-br from-emerald-50 to-emerald-100 rounded-3xl p-6 border-2 border-emerald-200">
                    <p className="text-emerald-900 text-lg leading-relaxed font-medium">
                        {t('userGuide.welcome')}
                    </p>
                </div>

                <div className="w-full space-y-6">
                    <Chapter icon={faUsers} title={t('userGuide.step1.title')} number={1}>
                        <p>
                            {t('userGuide.step1.content')}
                        </p>
                    </Chapter>

                    <Chapter icon={faUniversalAccess} title={t('userGuide.step2.title')} number={2}>
                        <p>
                            {t('userGuide.step2.content')}
                        </p>
                    </Chapter>

                    <Chapter icon={faLightbulb} title={t('userGuide.step3.title')} number={3}>
                        <p dangerouslySetInnerHTML={{ __html: t('userGuide.step3.content') }} />
                    </Chapter>

                    <Chapter icon={faBookOpen} title={t('userGuide.step4.title')} number={4}>
                        <Slideshow />
                    </Chapter>

                    <Chapter icon={faHeadset} title={t('userGuide.step5.title')} number={5}>
                        <p dangerouslySetInnerHTML={{ __html: t('userGuide.step5.content') }} />
                    </Chapter>
                </div>

                <div className="w-full mt-8 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-3xl p-6 text-white text-center shadow-lg">
                    <p className="text-lg font-bold mb-3">{t('userGuide.footer.cta')}</p>
                    <Link href="/HomePage" className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95">
                        {t('userGuide.footer.button')}
                    </Link>
                </div>
            </main>
        </div>
    );
}
