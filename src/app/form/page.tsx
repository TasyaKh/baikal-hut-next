"use client"

import React, {FC} from 'react';
import Form from "../../components/Form";
import NavBack from "../../components/Nav/NavBack";
import Footer from "../../components/Footer/Footer";

interface FormPageProps {

}

const Page: FC<FormPageProps> = () => {

    return (
        <div>
            <NavBack/>
            <div className={"container mx-auto my-10"}>
                <Form/>
            </div>
            <Footer/>
        </div>
    );
}

export default Page;
