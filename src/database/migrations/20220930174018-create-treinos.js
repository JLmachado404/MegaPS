'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('treinos', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'users', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      segunda: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      terça: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quarta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      quinta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sexta: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sabado: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      domingo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('treinos');
  }
};
