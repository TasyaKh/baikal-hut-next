import React, {FC, useEffect, useState} from 'react';
import {FullscreenControl, Map, Placemark, YMaps, ZoomControl} from "@pbe/react-yandex-maps";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

interface ArriveProps {
}

const Coords: FC<ArriveProps> = () => {

    const [md, setMd] = useState('')

    const mapStyle = {width:'100%', height:'300px'}

    useEffect(() => {
        fetch('/md/coords.html').then(response => response.text())
            .then(data => setMd(data))
    }, []);

    return (
        <div className="">
            {/*<h2 className={"text-4xl font-bold text-main-color mb-5"}> Контакты </h2>*/}
            <div className={"grid grid-cols-12 shadow rounded-2xl overflow-hidden "}>
                <div className={" p-6 col-span-12  lg:col-span-4"}>
                    <ReactMarkdown rehypePlugins={[rehypeRaw]} className={"text-1xl"}>{md}</ReactMarkdown>
                </div>
                <div className={"col-span-12 lg:col-span-8"}>
                    <YMaps>
                        <div>
                            <Map style={mapStyle}  state={{ center: [51.628291, 103.805149], zoom: 9 }} >
                                <Placemark geometry={[51.628291, 103.805149]} />
                                <ZoomControl />
                                <FullscreenControl />
                            </Map>

                        </div>
                    </YMaps>
                </div>
            </div>

        </div>
    );
}

export default Coords;
