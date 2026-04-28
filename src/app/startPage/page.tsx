import Link from "next/link";

export default function Page(){
    return(
        <div className="min-h-full bg-[#FFFFFF] p-1.5">
            <div className="flex items-center justify-center">
                <div className="border rounded-3xl shadow w-full bg-[#002126] mt-1 py-7">
                    <h1 className="text-[#398952] text-3xl text-center font-bold">Simplexo</h1>
                </div>
            </div>
            <div className="flex gap-6 border rounded-3xl justify-center shadow bg-[#002126] py-20 mt-2 ">
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
            <div className="rounded-3xl shadow bg-[#002126] mt-2">
                <div className="py-48.5 px-5">
                    <div className="flex flex-col justify-center gap-2.5">
                        <button className="bg-[#398952] text-2xl rounded-full py-4">
                            <p className="text-[#FFFFFF]">
                                Sign up
                            </p>
                        </button>
                        <Link href="/login" className="bg-[#398952] text-2xl rounded-full py-4 text-white block text-center">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

