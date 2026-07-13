const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Delivery = db.define("delivery", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    delivery_id: {
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

module.exports = Delivery;