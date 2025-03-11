'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'table_number');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'table_number', {
      type: Sequelize.INTEGER,
    });
  },
};

