'use client';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function Page(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const router = useRouter();

    const isFormComplete =
        firstName.trim() !== "" &&
        lastName.trim() !== "" &&
        email.trim() !== "" &&
        password.trim() !== "" &&
        confirmPassword.trim() !== "";

    const passwordsMatch = password === confirmPassword;
    const showPasswordError = confirmPassword.trim() !== "" && !passwordsMatch;
    const isSignUpEnabled = isFormComplete && passwordsMatch;

    const handleSignUp = () => {
        if (isSignUpEnabled) {
            router.push("/HomePage");
        }
    };

    return(
        <div className="min-h-full bg-linear-to-br from-white via-emerald-50 to-white p-4 overflow-y-auto">
            <div className="flex items-center justify-center mb-2 animate-fade-in">
                <div className="border rounded-3xl shadow-xl bg-linear-to-r from-emerald-950 to-emerald-900 py-6 px-8 w-full max-w-md hover-lift">
                    <h1 className="text-emerald-400 text-4xl text-center font-bold">Simplexo</h1>
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

            <div className="rounded-3xl shadow-2xl bg-linear-to-b from-emerald-950 to-emerald-900 py-8 px-6 max-w-md mx-auto w-full animate-slide-in mb-8" style={{animationDelay: '0.2s'}}>
                <div className="flex justify-center mb-8">
                    <h1 className="text-emerald-400 text-5xl font-bold">Sign up</h1>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-col justify-center gap-4 w-full">
                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">First Name</label>
                            <input
                                type="text"
                                placeholder="John"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700"
                            />
                        </div>

                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">Last Name</label>
                            <input
                                type="text"
                                placeholder="Doe"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700"
                            />
                        </div>

                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">Email</label>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700"
                            />
                        </div>

                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700 pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-4 top-3.5 text-emerald-300 hover:text-emerald-200 transition-colors cursor-pointer"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="text-emerald-300 text-sm font-semibold mb-2 block">Confirm Password</label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full bg-emerald-800 text-white placeholder-emerald-400 px-4 py-3 rounded-full outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-emerald-900 transition-all hover:bg-emerald-700 pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute right-4 top-3.5 text-emerald-300 hover:text-emerald-200 transition-colors cursor-pointer"
                                >
                                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                                </button>
                            </div>
                        </div>

                        {showPasswordError && (
                            <div key="password-mismatch" className="bg-red-500 bg-opacity-20 border border-red-500 text-red-200 rounded-full px-4 py-2 text-center text-sm font-semibold animate-pulse">
                                Passwords don&apos;t match!
                            </div>
                        )}

                        <button
                            onClick={handleSignUp}
                            disabled={!isSignUpEnabled}
                            type="button"
                            className={`text-lg rounded-full py-3 px-8 text-white font-semibold transition-all duration-300 w-full mt-4 ${
                                isSignUpEnabled
                                    ? 'bg-emerald-500 cursor-pointer hover:bg-emerald-400 hover:shadow-lg active:scale-95 hover-lift'
                                    : 'bg-gray-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            Sign Up
                        </button>

                        <div className="relative my-6">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-emerald-700"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-linear-to-b from-emerald-950 to-emerald-900 text-emerald-400">Or sign up with</span>
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
                    <span>Already have an account?</span>
                    <Link href="/LoginPage" className="text-emerald-400 hover:text-emerald-300 font-bold transition-colors hover:underline">
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
}
