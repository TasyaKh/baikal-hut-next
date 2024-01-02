import React, {FC} from 'react';
import Link from "next/link";

interface NavBackProps {
}

const NavBack: FC<NavBackProps> = () => {

    return (
        <nav className="flex items-center shadow justify-between backdrop-blur backdrop-filter flex-wrap p-6 w-full sticky z-50  opacity-95 top-0 bg-blue-200 bg-gradient-to-r from-blue-300 to-blue-100">
            <div className="grid grid-cols-12 sm:gap-5 gap-0 w-full">

                <Link href={"/"} className={"col-span-3 sm:col-span-6 "}>
                        <div className={"flex flex-row items-center"}>
                            <img src="/logo.jpg" className="w-100 h-12 mr-2 rounded-3xl"
                                 alt="Logo"/>
                            <span className={"font-bold hidden  sm:block  hover:text-main-color text-gray-700"}>Хижина на Байкале</span>
                    </div>
                </Link>
                <div className={"col-span-9 sm:col-span-6 justify-end sm:flex"}>
                    <Link className={"items-center flex mx-4"} href={"/form"}>
                        <button  className={"btn-order"}>Забронировать</button>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
export default NavBack;
