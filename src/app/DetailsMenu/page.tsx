import Image from "next/image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMagnifyingGlass, faSliders, faCircleInfo, faArrowRight, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <main className="flex flex-1 w-full max-w-3xl flex-col items-center space-y-10 py-32 px-16 bg-white dark:bg-black sm:items-start">
                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold">
                    Simplexo
                </div>

                <div className="w-full bg-white border-2 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold">
                    <div className="w-1 flex flex-row">
                        <div className="rotate-90">
                            <FontAwesomeIcon icon={faSliders}/>
                        </div>

                        Settings
                    </div>
                </div>

                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold">
                    <div className="flex flex-row justify-between">
                        <span><FontAwesomeIcon icon={faCircleInfo}/> Version</span>
                        <span>1.1.0</span></div>
                </div>

                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10  text-emerald-600 text-2xl font-semibold">
                    <div className="flex flex-row justify-between">
                        <span><FontAwesomeIcon icon={faArrowRight}/> Return</span>
                    </div>
                </div>

                <div className="w-full bg-emerald-950 rounded-4xl px-6 py-10 text-red-900 text-2xl font-semibold">
                    <div className="flex flex-row justify-between">
                        <span><FontAwesomeIcon icon={faArrowRightFromBracket}/> Log out</span>
                    </div>
                </div>
            </main>
        </div>
    );
}
