import Link from "next/link";
import Image from "next/image"

export default function Page(){
    return(
        <div className="min-h-full bg-linear-to-br from-white via-emerald-50 to-white p-4 flex flex-col items-center justify-center">

            <div className="flex items-center justify-center mb-4 animate-fade-in w-full max-w-md">
                <div className="w-40 h-40 rounded-full shadow-xl bg-linear-to-r from-emerald-950 to-emerald-900 p-4 hover-lift flex items-center justify-center overflow-hidden">
                    <Image src="/Logo/SimplexoCircularLogo.png" alt="Simplexo Logo" width={300} height={120} className="object-contain rounded-full" />
                </div>
            </div>


            <div className="flex border-2 border-emerald-100 rounded-4xl justify-between shadow-xl bg-white py-12 mt-4 px-6 w-full max-w-md hover-lift animate-slide-in" style={{animationDelay: '0.1s'}}>
                <div className="flex-1 flex flex-col justify-center items-center">
                    <p className="text-emerald-950 text-4xl font-bold leading-tight">
                        Medical Tech,
                    </p>
                    <p className="text-emerald-600 text-4xl font-bold mt-2">
                        Made Simple
                    </p>
                </div>
            </div>


            <div className="rounded-4xl shadow-2xl bg-linear-to-b from-emerald-950 to-emerald-900 mt-6 w-full max-w-md px-6 py-12 animate-slide-in" style={{animationDelay: '0.2s'}}>
                <div className="flex flex-col justify-center gap-5">

                    <Link
                        href="/RegisterPage"
                        className="bg-linear-to-r from-emerald-500 to-emerald-600 text-white text-2xl rounded-full py-4 text-center font-bold hover:from-emerald-400 hover:to-emerald-500 hover:shadow-2xl transition-all active:scale-95 hover-lift block"
                    >
                        ✨ Sign Up
                    </Link>


                    <Link
                        href="/LoginPage"
                        className="bg-linear-to-r from-white to-gray-100 text-emerald-950 text-2xl rounded-full py-4 text-center font-bold hover:from-gray-50 hover:to-gray-200 hover:shadow-2xl transition-all active:scale-95 hover-lift block border-2 border-white"
                    >
                        🔐 Log In
                    </Link>
                </div>
            </div>


            <div className="fixed -bottom-32 -left-32 w-96 h-96 bg-linear-to-br from-emerald-600 to-emerald-900 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
            <div className="fixed -top-32 -right-32 w-96 h-96 bg-linear-to-br from-emerald-400 to-emerald-700 rounded-full opacity-10 blur-3xl pointer-events-none"></div>
        </div>
    );
}
