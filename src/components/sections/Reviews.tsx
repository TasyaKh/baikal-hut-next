import React, {FC} from 'react';
import {comments} from "@/assets/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import './Reviews.scss'
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import Comment from "@/components/other/Comment";

interface ReviewsProps {
}

const Reviews: FC<ReviewsProps> = () => {

    return (
        <div className={"Reviews"}>
            <h2 className={"text-4xl font-bold text-main-color text-center mb-5"}> Клиенты о Нас </h2>
            <div
                id="carouselCommentCaptions"
                className="relative"
                data-te-carousel-init
                data-te-ride="carousel">
                <div
                    className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
                    data-te-carousel-indicators>
                    <button
                        type="button"
                        data-te-target="#carouselCommentCaptions"
                        data-te-slide-to="0"
                        data-te-carousel-active
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current="true"
                        aria-label="Slide" ></button>
                    {comments.map((value, index) => (
                        <button
                            type="button"
                            data-te-target="#carouselCommentCaptions"
                            data-te-slide-to={index + 1}
                            className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                            aria-label="Slide" key={index+1}></button>
                    ))}

                </div>

                <div
                    className="relative shadow bg-gradient-to-r from-blue-200 to-blue-100 w-full rounded-xl over lg:h-50  overflow-hidden after:clear-both after:block after:content-['']"
                >
                    <div
                        className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                        data-te-carousel-active={true}
                        data-te-carousel-item
                        style={{backfaceVisibility: "hidden"}}>
                        <Comment icon={
                            <FontAwesomeIcon icon={comments[0].img} size={"2x"}
                                             className={`absolute top-5 ${comments[0].className}`}/>}
                                 name={comments[0].name} content={comments[0].content}/>
                    </div>
                    {comments.slice(1).map((value, index) => (
                        <div
                            className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                            data-te-carousel-item={index + 1}
                            style={{backfaceVisibility: "hidden"}} key={index+1}>
                            <Comment icon={
                                <FontAwesomeIcon icon={value.img} size={"2x"}
                                                 className={`absolute top-5 ${value.className}`}/>}
                                     name={value.name} content={value.content}/>
                        </div>
                    ))}
                </div>

                <button
                    className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselCommentCaptions"
                    data-te-slide="prev">
             <span className="inline-block h-8 w-8">
                 <FontAwesomeIcon icon={faArrowLeft} size={"2x"}/>
             </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Previous</span
                    >
                </button>
                <button
                    className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                    type="button"
                    data-te-target="#carouselCommentCaptions"
                    data-te-slide="next">
            <span className="inline-block h-8 w-8">
              <FontAwesomeIcon icon={faArrowRight} size={"2x"}/>
            </span>
                    <span
                        className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                    >Next</span
                    >
                </button>
            </div>
        </div>
    );
}

export default Reviews;
