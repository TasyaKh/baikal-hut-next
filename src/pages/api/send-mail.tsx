import { render } from '@react-email/render';
import nodemailer from 'nodemailer';
import EmailGuest from "@/components/EmailGuest";
import {NextApiRequest, NextApiResponse} from "next";

export default async function sendMail(req:NextApiRequest, res:NextApiResponse){

    if(req.method != 'POST'){
        return res.status(405).end()
    }

    const {name, phone, dates, guests} = req.body

    const transporter = nodemailer.createTransport({
        service:"nic",
        host: String(process.env.SMTP_HOST),
        port: Number(process.env.SMTP_PORT),
        secure: true,
        auth: {
            user: process.env.SMTP_FROM_EMAIL,
            pass:  process.env.SMTP_FROM_PASSWORD,
        },
    });

    const emailHtml = render(<EmailGuest   date_from={dates.from} date_to={dates.to} guests={guests} name={name} phone={phone}/>);

    const options = {
        from: process.env.SMTP_FROM_EMAIL,
        to:  process.env.SMTP_TO_EMAIL,
        subject: 'Новый гость',
        html: emailHtml,
    };

    await transporter.sendMail(options).then(()=>{
       res.status(200).json({message:' Успешно отправлено'})
    }).catch((err)=>{
        res.status(500).json({message:'Ошибка при отправке: ' + err})
        console.log('Ошибка при отправке ' + err)
    });
}
