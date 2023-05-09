const { DataTypes } = require('sequelize')
const sequelize = require('../db')

const AudioFile = sequelize.define('AudioFile', {
    id_pista: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        autoIncrement: false,
        allowNull: false,
    },
    titulo: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    cant_reprod: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    id_user_cargas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, { 
    // Trabaja en la tabla "pista_musica"
    tableName: "pista_musica",
})

module.exports = AudioFile