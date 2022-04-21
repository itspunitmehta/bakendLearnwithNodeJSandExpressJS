const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('node_complete', 'root', 'Punit@1415',{
    dialect: 'mysql',
    host:'localhost'
});

// const mysql = require('mysql2');

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'node_complete',
//     password: 'Punit@1415'
// });

module.exports = sequelize;