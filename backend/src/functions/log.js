const fs = require("fs");
const path = require("path");

const createLog = async (error) => {
    const fecha = new Date().toLocaleString();

    const mensaje = `
=========================
Fecha: ${fecha}
Error: ${error.message}
=========================

`;

    console.error(mensaje);

    fs.appendFileSync(
        path.join(__dirname, "../logs.txt"),
        mensaje
    );
};

module.exports = {
    createLog
};