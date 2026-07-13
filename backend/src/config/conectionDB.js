const { Sequelize } = require("sequelize");

const db = new Sequelize(
    "proyecto_oviadso",
    "root",
    "tania04",
    {
        dialect: "mysql",
        host: "localhost",
        port: 3306
    }
);

module.exports = db;