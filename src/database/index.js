const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../models/User');
const Treinos = require('../models/Treino');

const connection = new Sequelize(dbConfig);

User.init(connection);
Treinos.init(connection);

User.associate(connection.models);
Treinos.associate(connection.models);

module.exports = connection;