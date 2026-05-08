'use client';

import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Page(){
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return(
        <div className="min-h-full bg-[#FFFFFF] p-1.5">
            <div className="flex items-center justify-center">
                <div className="border rounded-3xl shadow w-full bg-[#002126] mt-1 py-7">
                    <h1 className="text-[#398952] text-3xl text-center font-bold">Simplexo</h1>
                </div>
            </div>
            <div className="flex gap-6 border rounded-3xl justify-center shadow bg-[#002126] py-18 mt-2 ">
                <div>
                    <p className="text-[#398952] text-2xl">
                        Medical tech,
                    </p>
                    <p className="text-[#398952] text-2xl">
                        made simple
                    </p>
                </div>
                <div>
                    <h1 className="text-[#398952] text-2xl">
                        IMAGINE
                    </h1>
                </div>
            </div>
            <div className="rounded-3xl shadow bg-[#002126] mt-2 py-3">
                <div className="flex justify-center">
                    <div className="mt-8">
                        <h1>
                            <p className="text-[#398952] text-4xl">
                                Sign up
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="px-5 mt-10 flex justify-center">
                    <div className="flex flex-col justify-center gap-2 w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="First Name"
                            className="bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            className="bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none"
                        />
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                placeholder="Password"
                                className="bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none w-full pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-4 top-2.5 text-white"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none w-full pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-4 top-2.5 text-white"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full max-w-sm mt-3">
                            <button className="bg-[#398952] text-lg rounded-full py-2 px-16 text-white">
                                Sign Up
                            </button>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full max-w-sm mt-1">
                            <h1 className="text-[#398952] text-sm">Or sign up with:</h1>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto">

                    <button className="flex items-center justify-center gap-2 text-[#398952] py-3 rounded-full">
                        <FcGoogle className="text-2xl" />
                    </button>

                    <button className="flex items-center justify-center gap-2 text-[#398952] py-3 rounded-full">
                        <FaFacebook className="text-2xl" />
                    </button>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-[#FFFFFF] mt-2">
                    <span>Already have an account?</span>

                    <Link href="/LoginPage" className="text-[#398952] hover:underline">
                        Log in
                    </Link>
                </div>
                <div className="bg-[#002126] mt-1"></div>
            </div>
        </div>
    );
}

