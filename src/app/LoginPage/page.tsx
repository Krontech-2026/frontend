"use client";

import {FcGoogle} from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Page(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword] = useState(false);
    const router = useRouter();

    const isLoginEnabled = email.trim() !== "" && password.trim() !== "";

    const handleLogin = () => {
        if (isLoginEnabled) {
            router.push("/HomePage");
        }
    };

    return(
        <div className="min-h-full bg-linear-to-br from-white via-emerald-50 to-white p-4">
            <div className="flex items-center justify-center mb-2 animate-fade-in">
                <div className="border rounded-3xl shadow-xl bg-linear-to-r from-emerald-950 to-emerald-900 py-6 px-8 w-full max-w-md hover-lift flex items-center justify-center">
                    <Image src="/Logo/SimplexoLogo.png" alt="Simplexo Logo" width={200} height={60} className="object-contain" />
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
                    <h1 className="text-emerald-400 text-5xl font-bold">Log in</h1>
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

                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">Password</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700"
                            />
                        </div>

                        <div className="flex justify-between items-center text-sm mt-2">
                            <label className="flex items-center gap-2 text-emerald-300 cursor-pointer hover:text-emerald-200 transition-colors">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 accent-emerald-400 cursor-pointer rounded"
                                />
                                Remember me
                            </label>

                            <button 
                                className="text-emerald-400 hover:text-emerald-300 transition-colors cursor-pointer font-semibold" 
                                type="button" 
                                aria-label="Forgot password"
                            >
                                Forgot password?
                            </button>
                        </div>

                        <button 
                            onClick={handleLogin}
                            disabled={!isLoginEnabled}
                            type="button" 
                            className={`text-lg rounded-full py-3 px-8 text-white font-semibold transition-all duration-300 w-full mt-6 ${
                                isLoginEnabled 
                                    ? 'bg-emerald-500 cursor-pointer hover:bg-emerald-400 hover:shadow-lg active:scale-95 hover-lift' 
                                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            Login
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-emerald-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-linear-to-b from-emerald-950 to-emerald-900 text-emerald-400">Or continue with</span>
                            </div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <button 
                                className="flex items-center justify-center gap-2 bg-white text-gray-800 py-3 px-6 rounded-full cursor-pointer hover:shadow-lg hover:scale-105 transition-all active:scale-95 font-semibold" 
                                type="button"
                            >
                                <FcGoogle className="text-2xl" />
                                <span className="text-sm">Google</span>
                            </button>

                            <button 
                                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-full cursor-pointer hover:bg-blue-700 hover:shadow-lg hover:scale-105 transition-all active:scale-95 font-semibold" 
                                type="button"
                            >
                                <FaFacebook className="text-2xl" />
                                <span className="text-sm">Facebook</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-center gap-2 text-sm text-emerald-100 mt-8 pt-6 border-t border-emerald-700">
                    <span>Don&apos;t have an account?</span>
                    <Link href="/RegisterPage" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors hover:underline">
                        Sign up
                    </Link>
                </div>
            </div>

            {/* Decorative Elements */}
            <div className="fixed -bottom-20 -right-20 w-96 h-96 bg-linear-to-br from-emerald-600 to-emerald-900 rounded-full opacity-5 pointer-events-none"></div>
            <div className="fixed -top-20 -left-20 w-80 h-80 bg-linear-to-br from-emerald-400 to-emerald-700 rounded-full opacity-5 pointer-events-none"></div>
        </div>
    );
}