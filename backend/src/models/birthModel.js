const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Birth = db.define("birth", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    birth_id: {
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

module.exports = Birth;