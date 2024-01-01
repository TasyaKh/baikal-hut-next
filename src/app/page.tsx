"use client"

import React, {FC} from 'react';
import Nav from "../components/Nav/Nav";
import First from "../components/sections/First";
import AboutHome from "../components/sections/AboutHome";
import Images from "../components/sections/Images";
import Videos from "../components/sections/Videos";
import WeHave from "../components/sections/WeHave";
import Reviews from "../components/sections/Reviews";
import Coords from "../components/sections/Coords";
import Footer from "../components/Footer/Footer";

interface HomeProps {
}

const Home: FC<HomeProps> = () => (
    <div>
        <Nav/>
        <div>
            <First/>
        </div>
        <div id={"about-home"} className={"container mx-auto px-4 py-10"}>
            <AboutHome/>
        </div>
        <div className={""}>
            <Images/>
        </div>
        <div className={"container mx-auto px-4 py-6"}>
            <WeHave/>
        </div>
        <div id={"atmosphere"} className={"container mx-auto px-4 py-6"}>
            <Videos/>
        </div>
        <div id={"reviews"} className={"container mx-auto px-4 py-10"}>
            <Reviews/>
        </div>
        <div id={"arrive"} className={"container mx-auto px-4 pb-6 pt-10 "}>
            <Coords/>
        </div>
        <div id={"contacts"} className={"mt-10"}>
            <Footer/>
        </div>
    </div>

);

export default Home;
