const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('User', {
    correo: {
        type: DataTypes.STRING,
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    apellido: {
        type: DataTypes.STRING,
        allowNull: true
    },
    ciudad: {
        type: DataTypes.STRING,
        allowNull: true
    },
    pais: {
        type: DataTypes.STRING,
        allowNull: true
    },
    biografia: {
        type: DataTypes.STRING,
        allowNull: true
    },
    tipo_user: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

module.exports = User