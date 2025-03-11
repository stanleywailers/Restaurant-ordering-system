'use strict';



module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("dish_options", {
      id:{
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      
        name:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        price:{
          type: Sequelize.FLOAT,
        },
        is_selected:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },group_id:{
          type: Sequelize.INTEGER,
          allowNull: false,
          references: {
            model: "dish_option_groups",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },created_at: { 
          type: Sequelize.DATE,
          allowNull: false,
        },
    
  });
},

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("dish_options");
  }
};
