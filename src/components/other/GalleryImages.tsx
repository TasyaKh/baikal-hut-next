import React, {FC, useEffect, useState} from "react";
import {Gallery, Item} from "react-photoswipe-gallery";

interface GalleryImagesProps {
    images: string [],
}

const GalleryImages: FC<GalleryImagesProps> = ({images}) => {

    const [imgSizes, setImgSizes] = useState([{w: "1600", h: "1600"}])

    const smallItemStyles: React.CSSProperties = {
        cursor: 'pointer',
        objectFit: 'cover',
        width: '100%',
        height: '100%',
    }

    useEffect(() => {
        setImgSizes( Array.from({length: images.length}, () => ({w: "1600", h: "1600"})))
    }, [images]);

    const onImgLoad = (event:any, index: number) => {
        const {naturalWidth, naturalHeight} = event.target;

        setImgSizes(prevImgSizes => {
            const newImgSizes = [...prevImgSizes];
            newImgSizes[index] = { w: naturalWidth, h: naturalHeight };
            return newImgSizes;
        });
    }

    return (
        <Gallery withCaption>
            <div className={"md:grid md:grid-cols-2 lg:grid-cols-3 gap-4"}>
                {images.map((value, index) => (
                    <Item<HTMLImageElement>
                        original={value}
                        cropped={false}
                        width={imgSizes[index] ? imgSizes[index].w : "1600"}
                        height={imgSizes[index] ? imgSizes[index].h : "1600" }
                        alt="img"
                        key={index}>

                        {({ref, open}) => (
                            <div className={"w-full h-[300px] mb-4 sm:mb-0"}>
                                <img
                                    style={smallItemStyles}
                                    onLoad={(event) => onImgLoad(event, index)}
                                    src={value}
                                    ref={ref}
                                    onClick={open}
                                    alt={value}/>
                            </div>

                        )}
                    </Item>
                ))}
            </div>
        </Gallery>
    );
}

export default GalleryImages;
