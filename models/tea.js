const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const Tea = sequelize.define("Tea", {
        name: {
            type: DataTypes.STRING,
        },
        type: {
            type: DataTypes.STRING
        },
        lastBrewed: {
            type: DataTypes.DATEONLY
        },
        rank: {
            type: DataTypes.STRING
        },
        timeOfDay: {
            type: DataTypes.STRING
        },
        packetType: {
            type: DataTypes.STRING
        },
        descriptionShort: {
            type: DataTypes.TEXT
        },
        descriptionFull: {
            type: DataTypes.TEXT
        },
        background: {
            type: DataTypes.TEXT
        },
        provider: {
            type: DataTypes.STRING
        },
        website: {
            type: DataTypes.STRING
        },
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,  
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: true, 
        }
    })

        Tea.associate = (models) => {
            Tea.hasMany(models.Saga);
        }

        return Tea;
}

