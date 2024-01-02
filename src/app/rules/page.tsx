"use client"

import React, {FC, useEffect, useState} from 'react';
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import NavBack from '../../components/Nav/NavBack';
import Footer from "../../components/Footer/Footer";
import Loading from "@/components/other/Loading";

interface RulesProps {
}

const Page: FC<RulesProps> = () => {
    const [md, setMd] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('/md/rules.md').then(response => response.text())
            .then(data => setMd(data))
            .finally(()=> setIsLoading(false))

    }, []);

    return (
        <div>
            <NavBack/>
            <div className={"container mx-auto my-10"}>
                <h2 className={" text-4xl font-bold text-main-color mb-5"}> Правила аренды </h2>
                <div>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} className={"text-1xl"}>{md}</ReactMarkdown>
                </div>
            </div>
            {isLoading ?"true":false}
            {isLoading ? <Loading/> : null}
            <Footer/>
        </div>

    )

}

export default Page;
