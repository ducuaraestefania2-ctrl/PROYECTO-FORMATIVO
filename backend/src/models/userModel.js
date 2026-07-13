const { DataTypes } = require("sequelize");
const db = require("../config/conectionDB");

const User = db.define("users", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        max:50,
        min:3,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        max:50,
        min:3,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        max:50,
        min:3,  
        allowNull: false
    },
    documentId: {
        type: DataTypes.INTEGER,
        max:50,
        min:5,
        allowNull: false
    },
    postJob: {
        type: DataTypes.STRING,
        max:50, 
        min:7,
        allowNull: false
    },
    verifyEmail: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    active: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW
    }

});

module.exports = User;