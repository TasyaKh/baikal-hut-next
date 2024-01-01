import React, {FC} from 'react';
import Link from "next/link";

interface NavBackProps {
}

const NavBack: FC<NavBackProps> = () => {

    return (
        <nav className="flex items-center shadow justify-between backdrop-blur backdrop-filter flex-wrap p-6 w-full sticky z-50  opacity-95 top-0 bg-blue-200 bg-gradient-to-r from-blue-300 to-blue-100">
            <div className="flex items-center flex-shrink-0">
                <Link href={"/"}>
                        <div className={"flex flex-row items-center"}>
                            <img src="/logo.jpg" className="w-100 h-12 mr-2 rounded-3xl"
                                 alt="Logo"/>
                            <span className={"font-bold hidden md:block  hover:text-main-color text-gray-700"}>Хижина на Байкале</span>
                    </div>
                </Link>
            </div>
        </nav>
    );
}
export default NavBack;
