"use client";

import {FcGoogle} from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const isLoginEnabled = email.trim() !== "" && password.trim() !== "";

    const handleLogin = () => {
        if (isLoginEnabled) {
            router.push("/HomePage");
        }
    };
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
                    <div className="mt-10">
                        <h1>
                            <p className="text-[#398952] text-4xl">
                                Log in
                            </p>
                        </h1>
                    </div>
                </div>
                <div className="px-5 mt-10 flex justify-center">
                    <div className="flex flex-col justify-center gap-2 w-full max-w-sm">
                        <input
                            type="text"
                            placeholder="Email or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className=" bg-[#398952] text-white placeholder-white px-4 py-2 rounded-full outline-none"
                        />
                        <div className="flex justify-between items-center text-sm text-[#398952] mt-2">

                            <label className="flex items-center gap-2 text-sm text-[#398952] cursor-pointer">
                                <input
                                type="checkbox"
                                className="w-4 h-4 accent-[#398952] cursor-pointer"/>

                                Remember me
                            </label>

                            <button className="hover:underline cursor-pointer" type="button" aria-label="Forgot password">
                                Forgot password?
                            </button>

                        </div>
                        <div className="flex items-center justify-center gap-2 w-full max-w-sm mt-12">
                            <button 
                                onClick={handleLogin}
                                disabled={!isLoginEnabled}
                                type="button" 
                                className={`text-lg rounded-full py-2 px-16 text-white transition-all ${
                                    isLoginEnabled 
                                        ? 'bg-[#398952] cursor-pointer hover:bg-[#2a6239]' 
                                        : 'bg-gray-400 cursor-not-allowed opacity-50'
                                }`}
                            >
                                Login
                            </button>
                        </div>
                        <div className="flex items-center justify-center gap-2 w-full max-w-sm mt-10">
                            <h1 className="text-[#398952] text-sm">Or login with:</h1>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center gap-3 w-full max-w-sm mx-auto">

                    <button className="flex items-center justify-center gap-2 text-[#398952] py-3 rounded-full cursor-pointer" type={"button"}>
                        <FcGoogle className="text-2xl" />
                    </button>

                    <button className="flex items-center justify-center gap-2 text-[#398952] py-3 rounded-full cursor-pointer" type={"button"}>
                        <FaFacebook className="text-2xl" />
                    </button>
                </div>
                <div className="flex items-center justify-center gap-1 text-sm text-[#FFFFFF] mt-9">
                    <span>Don't have an account?</span>

                    <Link href="/RegisterPage" className="text-[#398952] hover:underline">
                        Sign up
                    </Link>
                </div>
                <div className="bg-[#002126] mt-1"></div>
            </div>
        </div>
    );
}

