const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Responsibles = db.define("responsibles", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    responsibles_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    female_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Responsibles;