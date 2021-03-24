const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const Saga = sequelize.define('Saga', {
        newUpdate: {
            type: DataTypes.TEXT,
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

    Saga.associate = (models) => {
        Saga.belongsTo(models.Tea, {
            foreignKey: 'TeaId'
        });
      };

    return Saga;
}

