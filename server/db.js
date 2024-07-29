const { Sequelize } = require('sequelize');
const urlModel = require('./src/models/Url.model');
const { DB_HOST, DB_PASSWORD, DB_NAME, DB_USER, DB_PORT } = require('./secure/secure');


const database = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`, {logging: false});

urlModel(database);

console.log(database.models);

module.exports = {
    database,
    ...database.models
}