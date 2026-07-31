require("dotenv").config();

const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const { createLog } = require("../functions/log");


const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: process.env.SMTP_PORT === "465", // true para puerto 465
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

// Función para enviar un correo electrónico
const getTemplateEmail = () => {

    // Leer configEmail.json
    const config = JSON.parse(
        fs.readFileSync(
            path.join(process.cwd(), "public", "template", "configEmail.json"),
            "utf8"
        )
    );

    // Leer confirmEmail.html
    let html = fs.readFileSync(
        path.join(process.cwd(), config.html),
        "utf8"
    );

    // Reemplazar propiedades
    for (const key in config.params) {
        html = html.replaceAll(key, config.params[key]);
    }

    return {
        subject: config.subject,
        html
    };
};
// Después sigue sendEmail

const sendEmail = async (to, subject, text, html) => {
    try {
        await transporter.sendMail({
            from: process.env.SMTP_USER,
            to,
            subject,
            text,
            html,
        });

        console.log("Correo enviado correctamente.");
    } catch (error) {
        await createLog(error);
        throw error;
    }
};


module.exports = {
    sendEmail,
    getTemplateEmail,
};