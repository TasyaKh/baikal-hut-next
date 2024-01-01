import React, { FC } from 'react';

interface FirstProps {}

const First: FC<FirstProps> = () =>{

    return (

        <div className="First">
            <div className="relative isolate items-center flex overflow-hidden bg-gray-900 py-24 sm:py-32 min-h-svh">
                <img
                    src="/img/2023/ВнешнийВид/web_20230823_KOZ_1410.jpg"
                    alt=""
                    className="absolute inset-0 -z-10 h-full w-full object-cover object-center"
                />


                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 bg-gray-500 bg-opacity-40 rounded-xl p-2">
                        <h2 className="text-4xl font-bold tracking-tight text-center text-white sm:text-5xl">Аренда дома на берегу Байкала</h2>
                        {/*<p className="mt-6 text-lg leading-8 text-gray-300">*/}

                        {/*</p>*/}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default First;
