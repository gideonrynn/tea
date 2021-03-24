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
        description: {
            type: DataTypes.TEXT
        },
        background: {
            type: DataTypes.TEXT
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

