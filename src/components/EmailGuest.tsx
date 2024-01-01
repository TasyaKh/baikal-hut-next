import {Html} from "@react-email/html"
import {Text} from "@react-email/text"
import {Section} from "@react-email/section"
import {Container} from "@react-email/container"

import {FC} from "react";

interface EmailProps {
    name: string,
    phone: string,
    date_from: string,
    date_to: string,
    guests: number
}

const EmailGuest: FC<EmailProps> = ({name, phone, date_from, date_to, guests}) => {

    return (
        <Html>
            <Section style={main}>
                <Container style={container}>
                    <Text style={heading}>{name}</Text>
                    <Text style={paragraph}>
                        <p className={"font-bold text-2xl"}>Тел: <a href={"tel:" + phone}> {phone} </a></p>
                        <p>Дата приезда: {date_from}</p>
                        <p>Дата убытия: {date_to}</p>
                        <p> Число гостей: {guests}</p>
                    </Text>
                </Container>
            </Section>
        </Html>
    );
}

export default EmailGuest;


// Styles for the email template
const main = {
    backgroundColor: "#ffffff",
}

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
}

const heading = {
    fontSize: "16px",
    lineHeight: "1.3",
    fontWeight: "700",
    color: "#484848",
}

const paragraph = {
    fontSize: "18px",
    lineHeight: "1.4",
    color: "#484848",
}
