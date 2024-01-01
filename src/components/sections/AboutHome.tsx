import React, {FC, useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from "rehype-raw";

interface AboutHomeProps {
}

const AboutHome: FC<AboutHomeProps> = () => {

    const [md, setMd] = useState('')

    useEffect(() => {
        fetch('/md/about-home.html').then(response => response.text())
            .then(data => setMd(data))
    }, []);

    return (
        <div className="AboutHome">
            <h2 className={" text-4xl font-bold text-main-color mb-5"}> О доме </h2>
            <div>
                <ReactMarkdown rehypePlugins={[rehypeRaw]} className={"text-1xl"}>{md}</ReactMarkdown>
            </div>
        </div>
    );
}

export default AboutHome;
