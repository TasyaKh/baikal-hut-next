import React, {FC, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {videos} from "@/assets/constants";

interface VideosProps {
}

const Videos: FC<VideosProps> = () => {

    const [selectedVideo, setSelectedVideo] = useState(0)

    const onVideoEnd = () => {
        if (selectedVideo + 1 < videos.length) setSelectedVideo(selectedVideo + 1)
        else setSelectedVideo(0)
    }

    return (
        <div className="bg-gray-800">
            <video
                src={videos[selectedVideo].src}
                controls={true}
                autoPlay={true}
                className="clip w-full"
                onEnded={()=>onVideoEnd()}
            ></video>

            <div className={"grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 p-4"}>
                {
                    videos.map((value, index) => (
                        <div className={`h-[200px] rounded-xl bg-blue-200 ${selectedVideo === index ? '' : 'opacity-20'}`}
                             style={{background: `url(${value.img}), black`}} key={index}>
                            <div
                                className={"opacity-0 w-full h-full hover:opacity-100 transition flex items-center justify-center"}
                                onClick={() => setSelectedVideo(index)}>
                                <FontAwesomeIcon icon={faPlayCircle} size={"3x"}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Videos;
