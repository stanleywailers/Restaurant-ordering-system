'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('orders', 'table_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'tables',
        key: 'id',
      },
      allowNull: true, 
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('orders', 'table_id');
  },
};

