const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const Weight = db.define("weight", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    date: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    weight_id: {
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

module.exports = Weight;