'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.createTable("dish_option_groups", {
   id: {
     type: Sequelize.INTEGER,
     primaryKey: true,
     autoIncrement: true,
   },
   option_name:{
      type: Sequelize.STRING,
      allowNull: false,
   },is_mandatory:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
   },dish_id:{
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: "dishes",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
   }, created_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  updated_at: {
    type: Sequelize.DATE,
    allowNull: false,
  },
     
  });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("dish_option_groups");
  }
};
