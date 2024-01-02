"use client"

import React, {FC, useEffect, useState} from 'react';
import 'photoswipe/dist/photoswipe.css'
import GalleryImages from "@/components/other/GalleryImages";
import Footer from "@/components/Footer/Footer";
import NavBack from "@/components/Nav/NavBack";

interface GalleryProps {
}

const GalleryGrid: FC<GalleryProps> = () => {

    const [currentFolder, setCurrentFolder] = useState(0)
    const [imagePaths, setImagePaths] = useState(['']);

    const imageFolders = [
        {src: '/img/2023/ВнутриДома', count: 24, tab: "Внутри Дома"},
        {src: '/img/2023/Баня', count: 6, tab: "Баня"},
        {src: '/img/2023/Территория', count: 32, tab: "Территория"},
        {src: '/img/2023/Весна', count: 4, tab: "Весна"},
        {src: '/img/2023/Зима', count: 8, tab: "Зима"},
        {src: '/img/2023/Лето', count: 9, tab: "Лето"},
        {src: '/img/2023/Осень', count: 6, tab: "Осень"},
    ]

    useEffect(() => {
        const imageFolder = imageFolders[currentFolder]
        const array = Array.from({length: imageFolder.count}, (_, index) =>
            imageFolder.src + "/" + (index + 1) + ".jpg");
        setImagePaths(array)

    }, [currentFolder]);

    return (
        <div>
            <NavBack/>
            <div className={"container mx-auto md:px-4 pt-6 pb-12"}>
                <div className={"flex justify-center text-2xl my-6 "}>
                    <ul
                        className="flex list-none flex-row flex-wrap border-b-0 pl-0">
                        {imageFolders.map((value, index) => (
                            <li onClick={() => setCurrentFolder(index)} key={index}>
                                <a
                                    href="#"
                                    className={`my-2 px-7 pt-4 text-xl font-medium uppercase leading-tight   hover:text-main-color
                                ${index == currentFolder ? ' text-blue-400  border-b-4 border-b-blue-100' : 'text-neutral-500'}`}
                                >{value.tab}</a>
                            </li>
                        ))}
                    </ul>

                </div>
                <div>
                    <GalleryImages images={imagePaths}/>
                </div>
            </div>

            <Footer/>
        </div>
    )

}

export default GalleryGrid;
