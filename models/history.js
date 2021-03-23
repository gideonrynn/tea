const { Sequelize } = require(".");

module.exports = function(sequelize, DataTypes) {

    const History = sequelize.define('History', {
        createdAt: {
            type: DataTypes.DATEONLY,
            allowNull: true,  
        },
        updatedAt: {
            type: DataTypes.DATEONLY,
            allowNull: true, 
        }
    })

    History.associate = (models) => {
        History.belongsTo(models.Tea, {
            // pascal case for foreign key to get around duplicate column sequelize error
            foreignKey: "TeaId",
            as: "tea",
          });
      };

    return History;
}

