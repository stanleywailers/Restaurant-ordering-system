"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Array con las 30 mesas
    const tables = [];
    for (let i = 1; i <= 30; i++) {
      tables.push({
        name: `Mesa ${i}`,
        isAvailable: true, // Todas las mesas inician disponibles
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    // Insertar las mesas en la base de datos
    await queryInterface.bulkInsert("tables", tables, {});
  },

  down: async (queryInterface, Sequelize) => {
    // Eliminar todas las mesas insertadas
    await queryInterface.bulkDelete("tables", null, {});
  },
};
