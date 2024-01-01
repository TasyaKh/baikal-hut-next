"use client"

import React, {FC, useState} from 'react';
import {Link as LinkRef} from "react-scroll";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClose, faWater} from "@fortawesome/free-solid-svg-icons";
import {pages, refs} from "@/assets/constants";
import Link from 'next/link'

interface NavProps {
}

const Nav: FC<NavProps> = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center shadow justify-between flex-wrap p-6 w-full backdrop-blur backdrop-filter  fixed z-50 top-0 bg-gradient-to-r from-blue-300/80 to-blue-100/80">
            <div className="flex items-center flex-shrink-0">
                <Link href={"/"}>
                        <div className={"flex flex-row items-center"}>
                            <img src="/logo.jpg" className="w-100 h-12 mr-2 rounded-3xl"
                                 alt="Logo"/>
                            <span className={"font-bold hidden md:block  hover:text-main-color text-gray-700"}>Хижина на Байкале</span>
                    </div>
                </Link>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded text-black-500 hover:text-main-color"
                >
                    <FontAwesomeIcon icon={isOpen ? faClose : faWater} size={"2x"}/>
                </button>
            </div>
            <div
                className={`w-full block flex-grow lg:flex justify-center lg:w-auto ${isOpen ? "block" : "hidden "}`}
            >
                <div className="flex flex-wrap justify-center">
                    {/*refs*/}
                    {refs.map((el, i) => (
                        <LinkRef className={"p-3"} to={el.section} spy={true} smooth={true} duration={300} key={el.name}>
                            <button className={"font-bold text-gray-700 hover:text-main-color"}>
                                {el.name}
                            </button>
                        </LinkRef>
                    ))
                    }
                    {/*pages*/}
                    {pages.map((el, i) => (
                        <Link className={"p-3"}  href={el.link} key={el.name}>
                            <button className={"font-bold text-gray-700 hover:text-main-color"}>
                                {el.name}
                            </button>
                        </Link>
                    ))
                    }
                    <Link className={"items-center flex mx-4"} href={"/form"}>
                        <button  className={"btn-order"}>Забронировать</button>
                    </Link>
                </div>

            </div>
        </nav>
    );
}
export default Nav;
