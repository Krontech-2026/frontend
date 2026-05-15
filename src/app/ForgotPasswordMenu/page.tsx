'use client';

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState("");
    useRouter();
    const isSendLinkEnabled = email.trim() !== "";

    const handleSendLink = () => {
        if (isSendLinkEnabled) {
            console.log("Password reset link sent to:", email);
        }
    };

    return (
        <div className="min-h-full bg-linear-to-br from-white via-emerald-50 to-white p-4">
            <div className="flex items-center justify-center mb-2 animate-fade-in">
                <div className="w-40 h-40 rounded-full shadow-xl bg-linear-to-r from-emerald-950 to-emerald-900 p-4 hover-lift flex items-center justify-center overflow-hidden">
                    <Image src="/Logo/SimplexoCircularLogo.png" alt="Simplexo Logo" width={200} height={60} className="object-contain rounded-full" />
                </div>
            </div>

            <div className="flex items-center justify-center mb-4 animate-slide-in" style={{animationDelay: '0.1s'}}>
                <div className="rounded-3xl shadow-lg bg-white py-8 px-6 w-full max-w-md border-2 border-emerald-100 hover-lift">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <p className="text-emerald-950 text-3xl font-bold">Medical Tech,</p>
                        <p className="text-emerald-600 text-3xl font-bold">Made Simple</p>
                    </div>
                </div>
            </div>

            <div className="rounded-3xl shadow-2xl bg-linear-to-b from-emerald-950 to-emerald-900 py-8 px-6 max-w-md mx-auto w-full animate-slide-in" style={{animationDelay: '0.2s'}}>
                <div className="flex justify-center mb-8">
                    <h1 className="text-emerald-400 text-5xl font-bold">Forgot Password</h1>
                </div>

                <div className="flex justify-center mb-6">
                    <div className="flex flex-col justify-center gap-4 w-full">
                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">Email</label>
                            <input
                                type="text"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700"
                            />
                        </div>

                        <button
                            onClick={handleSendLink}
                            disabled={!isSendLinkEnabled}
                            type="button"
                            className={`text-lg rounded-full py-3 px-8 text-white font-semibold transition-all duration-300 w-full mt-6 ${
                                isSendLinkEnabled 
                                    ? 'bg-emerald-500 cursor-pointer hover:bg-emerald-400 hover:shadow-lg active:scale-95 hover-lift' 
                                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            Send Reset Link
                        </button>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-emerald-100 mt-8 pt-6 border-t border-emerald-700">
                    <span>Remembered your password?</span>
                    <Link href="/LoginPage" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors hover:underline">
                        Log in
                    </Link>
                </div>
            </div>

            <div className="fixed -bottom-20 -right-20 w-96 h-96 bg-linear-to-br from-emerald-600 to-emerald-900 rounded-full opacity-5 pointer-events-none"></div>
            <div className="fixed -top-20 -left-20 w-80 h-80 bg-linear-to-br from-emerald-400 to-emerald-700 rounded-full opacity-5 pointer-events-none"></div>
        </div>
    );
}
