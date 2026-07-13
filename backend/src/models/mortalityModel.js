const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Mortality = db.define("mortality", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    mortality_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    cause: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    timestamps: false
});

module.exports = Mortality;