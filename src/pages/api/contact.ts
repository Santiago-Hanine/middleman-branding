import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface ContactData {
  message: string;
}

export default async function Contact(req: NextApiRequest, res: NextApiResponse<ContactData>) {
    const {name ,email, message, userType, redes} = req.body;

    const user = process.env.user;

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: "middlemanbrandingteam@gmail.com",
            pass: "gluj wmxy hvyj szrh"
        }
    })
  
    try {
        const mail = await transporter.sendMail({
            from: email,
            to: "middlemanbrandingteam@gmail.com",
            replyTo: email,
            subject: `Nuevo mensaje de ${name}`,
            html: `
                <p>Tipo: ${userType}</p>
                <p>Nombre: ${name}</p>
                <p>Redes: ${redes}</p>
                <p>Correo Electrónico: ${email}:</p>
                <p>Mensaje: <br> <br> <span class="text-lg">${message}</span></p>
            `
        })

        console.log('Correo enviado:', mail.messageId);
        

        return res.status(200).json({ message: 'Corre enviado correctamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({message: 'No se pudo enviar el email. Tu mensaje no fue enviado.'})   
    }

}
