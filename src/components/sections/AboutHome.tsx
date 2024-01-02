import React, {FC, useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";
import Loading from "@/components/other/Loading";

interface AboutHomeProps {
}

const AboutHome: FC<AboutHomeProps> = () => {

    const [md, setMd] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        fetch('/md/about-home.html').then(response => response.text())
            .then(data => setMd(data))
            .finally(()=> setIsLoading(false))
    }, []);

    return (
        <div className="AboutHome">
            <h2 className={" text-4xl font-bold text-main-color mb-5"}> О доме </h2>
            <div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} className={"text-1xl"}>{md}</ReactMarkdown>
            </div>
            {isLoading ? <Loading/> : null}
        </div>
    );
}

export default AboutHome;
