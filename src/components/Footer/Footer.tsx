import {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMailBulk, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faInstagram, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

interface FooterProps {
}

const Footer: FC<FooterProps> = () => {

    const social = [
        {text: "instagram", link: "https://www.instagram.com/baikal_hut", img: faInstagram}
    ]

    const contacts = [
        {text: "+79161111599", link: "tel:+79161111599", img: faPhone},
        {text: "baikalhut@gmail.com", link: "mailto:baikalhut@gmail.com", img: faMailBulk},
        {text: "79161111599", link: "https://wa.me/79161111599", img: faWhatsapp},
    ]

    return (

        <footer
            className="bg-neutral-100 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
            <div
                className="flex items-center justify-center bg-blue-300 border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
                {social.map((value, index) => (
                    <div className="flex justify-center" key={index}>
                        <a href={value.link} className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <FontAwesomeIcon icon={value.img} size={"2x"}/>
                        </a>
                    </div>
                ))}
                {contacts.map((value, index) => (
                    <div className="flex justify-center" key={index}>
                        <a href={value.link} className="mr-6 text-neutral-600 dark:text-neutral-200">
                            <FontAwesomeIcon icon={value.img} size={"2x"}/>
                        </a>
                    </div>
                ))}

            </div>

            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <h6
                            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            <img src="/logo.jpg" className="w-100 h-12 mr-2 rounded-3xl" alt="Logo"/>
                        </h6>
                        <p>
                            Хижина на Байкале
                        </p>
                    </div>
                    {/*products*/}
                    <div className="">
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            <Link href={"/rules"} className={"text-blue-400"}>
                                Правила аренды
                            </Link>
                        </h6>
                        {/*contacts*/}
                        <h6
                            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Контакты
                        </h6>
                        {contacts.map((value, index) => (
                            <div className="mb-4 flex items-center justify-center md:justify-start" key={index}>
                                <a href={value.link} className="mr-6  text-blue-400">
                                    <FontAwesomeIcon icon={value.img} size={"2x"}/>
                                    {value.text}
                                </a>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            <div className="border-t-2 p-6 text-center">
                <span> Все права защищены ©{new Date().getFullYear()} </span>
            </div>
        </footer>
    );
}
export default Footer;
