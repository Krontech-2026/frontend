import Link from "next/link";

export default function Page(){
    return(
        <div className="min-h-full bg-[#FFFFFF] p-1.5">
            <div className="flex items-center justify-center">
                <div className="border rounded-3xl shadow w-full bg-[#002126] mt-1 py-7">
                    <h1 className="text-[#398952] text-3xl text-center font-bold">Simplexo</h1>
                </div>
            </div>
            <div className="flex border rounded-3xl justify-between shadow bg-[#002126] py-18 mt-2 px-6">
                <div className="flex-1 flex flex-col justify-center items-center">
                    <p className="text-[#398952] text-3xl">
                        Medical tech,
                    </p>
                    <p className="text-[#398952] text-3xl">
                        made simple
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div className="bg-gray-500 text-white px-12 py-6 rounded-lg text-center text-xl">
                        logo
                    </div>
                </div>
            </div>
            <div className="rounded-3xl shadow bg-[#002126] mt-2">
                <div className="py-51 px-5">
                    <div className="flex flex-col justify-center gap-2.5">
                        <Link href="/RegisterPage" className="bg-[#398952] text-2xl rounded-full py-4 text-white block text-center">
                            Sign Up
                        </Link>
                        <Link href="/LoginPage" className="bg-[#398952] text-2xl rounded-full py-4 text-white block text-center">
                            Log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}