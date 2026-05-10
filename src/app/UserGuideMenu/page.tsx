'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faUsers, faUniversalAccess, faLightbulb, faBookOpen, faHeadset, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Image from 'next/image';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

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
    const slides = [
        { 
            src: '/AppGuide/1.png', 
            title: 'Home Dashboard', 
            description: (
                <>
                    <p><strong>The Central Hub:</strong> The Home screen is your starting point. From here, you can quickly access all the app’s main features:</p>
                    <p><strong>Search or Scan:</strong> Use the search bar to manually look up a medical device.</p>
                    <p><strong>Quick Actions:</strong> Large, easy-to-tap buttons allow you to jump straight to the Camera for a new scan, view your Saved items, or browse your recent History.</p>
                    <p><strong>Navigation Bar:</strong> Use the bottom menu to switch between the Home screen and your Personal Profile.</p>
                </>
            )
        },
        { 
            src: '/AppGuide/2.png', 
            title: 'Camera Scanner', 
            description: (
                <>
                    <p><strong>Identifying Your Device:</strong> This is where the core functionality happens.</p>
                    <p><strong>Scanning:</strong> Center the medical device or its packaging within the frame. The app will automatically guide you to align the item for the best results.</p>
                    <p><strong>Controls:</strong> You can toggle the flash for better lighting in dark environments or switch between front and rear cameras using the icons surrounding the shutter button.</p>
                    <p><strong>Gallery Upload:</strong> Use the image icon to the left of the shutter to upload a photo directly from your phone&apos;s gallery.</p>
                </>
            )
        },
        { 
            src: '/AppGuide/3.png', 
            title: 'Saved Info', 
            description: (
                <>
                    <p><strong>Your Personalized Library:</strong> Never lose track of important instructions again.</p>
                    <p><strong>Organization:</strong> Any item you &quot;favorite&quot; or save will appear here, organized by the date it was added.</p>
                    <p><strong>Search:</strong> Use the internal search bar to find a specific saved device quickly.</p>
                    <p><strong>Management:</strong> If you want to declutter, you can use the &quot;Delete All Saved Items&quot; button at the bottom to reset your library.</p>
                </>
            )
        },
        { 
            src: '/AppGuide/4.png', 
            title: 'History', 
            description: (
                <>
                    <p><strong>Tracking Your Activity:</strong> The History tab keeps a chronological log of every device you have scanned.</p>
                    <p><strong>Timeline:</strong> Scans are grouped by &quot;Today,&quot; &quot;Yesterday,&quot; and earlier, allowing you to re-read instructions for a device you looked up recently.</p>
                    <p><strong>Quick Access:</strong> Tap any entry to jump back into the detailed guide for that specific item.</p>
                    <p><strong>Clear History:</strong> You can wipe your recent activity at any time using the red button at the bottom.</p>
                </>
            )
        },
        { 
            src: '/AppGuide/5.png', 
            title: 'Scanned Item Details', 
            description: (
                <>
                    <p><strong>Understanding the Device:</strong> Once a device is identified, you are presented with a comprehensive guide broken down into three easy sections:</p>
                    <p><strong>About:</strong> A brief overview of what the device is.</p>
                    <p><strong>How to Use:</strong> Step-by-step instructions (e.g., how to administer an injection or use a monitor).</p>
                    <p><strong>When to Use:</strong> Clear guidance on the frequency or specific situations where the device is required.</p>
                    <p><strong>Save Feature:</strong> Tap the heart icon in the top right corner to add this info to your Saved list.</p>
                </>
            )
        },
        { 
            src: '/AppGuide/6.png', 
            title: 'My Profile', 
            description: (
                <>
                    <p><strong>Personalizing Your Experience:</strong> Manage your account and personal details in one place.</p>
                    <p><strong>Personal Information:</strong> View your registered name, email, date of birth, and contact details.</p>
                    <p><strong>Edit Profile:</strong> Tap the &quot;Edit Profile&quot; button to update your information or change your profile picture.</p>
                    <p><strong>Logout:</strong> Securely exit your account by tapping the red logout button at the bottom of the screen.</p>
                </>
            )
        },
    ];
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
                        key={slide.src}
                        className={`absolute inset-0 transition-opacity duration-500 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Image src={slide.src} alt={`Slide ${index + 1}`} layout="fill" objectFit="contain" />
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
                    <div className="text-emerald-900">{slides[currentIndex].description}</div>
                </div>
            </div>
        </div>
    );
};

export default function AboutUs() {
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
                        📚 User Guide
                    </h1>
                </div>

                <div className="w-full bg-linear-to-br from-emerald-50 to-emerald-100 rounded-3xl p-6 border-2 border-emerald-200">
                    <p className="text-emerald-900 text-lg leading-relaxed font-medium">
                        Welcome to Simplexo! This guide will help you get the most out of our medical technology app. Follow these 5 simple steps to become a power user! 🚀
                    </p>
                </div>

                <div className="w-full space-y-6">
                    <Chapter icon={faUsers} title="Who are we?" number={1}>
                        <p>
                            This project was developed for the KronTech competition, organized by KronSoft. Our mission is to bridge the gap between complex medical technology and the everyday user.
                        </p>
                    </Chapter>

                    <Chapter icon={faUniversalAccess} title="Who is this for?" number={2}>
                        <p>
                            This guide is for everyone. Whether you are a patient, a caregiver, or simply a curious learner, our goal is to ensure that anyone can operate essential medical devices—such as EpiPens, glucose meters, and injection kits—safely, confidently, and effectively.
                        </p>
                    </Chapter>

                    <Chapter icon={faLightbulb} title="About the Project" number={3}>
                        <p>
                            Created for the KronTech competition by KronSoft, this project aims to simplify the way people interact with medical technology. We believe that understanding your health tools shouldn&apos;t be difficult.
                            <br/><br/>
                            From glucose meters to EpiPens, we provide clear, accessible instructions designed for every user, ensuring medical devices are used properly and effectively by anyone, anywhere.
                        </p>
                    </Chapter>

                    <Chapter icon={faBookOpen} title="How to use the app" number={4}>
                        <Slideshow />
                    </Chapter>

                    <Chapter icon={faHeadset} title="Support & Feedback" number={5}>
                        <p>
                            Have questions or need assistance? We are here to help. If you encounter any issues with the site or have suggestions for improvement, please don&apos;t hesitate to reach out to us:
                            <br/><br/>
                            <strong>Email:</strong> example@gmail.com
                            <br/>
                            <strong>Phone:</strong> +40 123 456 789
                            <br/>
                            <strong>Availability:</strong> Monday – Friday, 09:00 – 17:00
                        </p>
                    </Chapter>
                </div>

                <div className="w-full mt-8 bg-linear-to-r from-emerald-500 to-emerald-600 rounded-3xl p-6 text-white text-center shadow-lg">
                    <p className="text-lg font-bold mb-3">Ready to get started?</p>
                    <Link href="/HomePage" className="inline-block bg-white text-emerald-600 px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-all active:scale-95">
                        Go to Home →
                    </Link>
                </div>
            </main>
        </div>
    );
}
