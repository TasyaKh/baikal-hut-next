import React, { FC } from 'react';

interface FirstProps {}

const First: FC<FirstProps> = () =>{

    return (

        <div className="First">
            <div className="relative isolate items-center flex overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-svh">
                <img
                    src="/img/2023/Территория/29.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                />
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 bg-gradient-to-r from-blue-300/50 to-blue-100/20 bg-opacity-40 rounded-xl p-2">
                        <h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl">Аренда дома на берегу Байкала</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default First;
