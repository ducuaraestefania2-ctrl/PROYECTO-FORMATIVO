const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Feeding = db.define("feeding", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    feeding_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    food_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Feeding;