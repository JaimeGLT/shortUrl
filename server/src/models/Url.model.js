const { DataTypes } = require('sequelize');

module.exports = database => {

    database.define('Url', {

        shortId: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        url: {
            type: DataTypes.STRING(2000),
            allowNull: false
        },
        clicks: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
            allowNull: false,
        }

    })

};