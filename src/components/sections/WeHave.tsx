import React, {FC} from 'react';
import {weHave} from "@/assets/constants";

interface WeHaveProps {
}

const WeHave: FC<WeHaveProps> = () => {

    return (
        <div className="">
            <div className="bg-white ">
                <div className="max-w-7xl">

                    <div className="max-w-2xl">
                        <h2 className={"text-4xl font-bold text-main-color mb-10"}> Что мы предлагаем </h2>
                    </div>

                    <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {weHave.map((value, index)=>(
                        <li key={index}>
                            <div className="flex items-center gap-x-6">
                                <img className="h-20 w-20 rounded-full" src={value.img} alt=""/>
                                <div>
                                    <h3 className="text-2xl font-bold mb-3 tracking-tight text-gray-900">{value.title}</h3>
                                    <p className="text-1xl leading-6">{value.content}</p>
                                </div>
                            </div>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default WeHave;
