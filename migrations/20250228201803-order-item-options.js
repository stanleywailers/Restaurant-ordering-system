'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("order_item_options", {
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true,
   },
   order_item_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "orderitems",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
   },dish_option_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "dish_options",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
   }, created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
   });
  },

  down: async (queryInterface, Sequelize) => {
   return queryInterface.dropTable("order_item_options");
  }
}

