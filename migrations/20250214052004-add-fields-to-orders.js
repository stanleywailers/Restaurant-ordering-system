"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // 1️⃣ Agregar la columna "subtotal"
    await queryInterface.addColumn("orders", "subtotal", {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    });

    // 2️⃣ Agregar la columna "tip"
    await queryInterface.addColumn("orders", "tip", {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    });

    // 3️⃣ Modificar la columna "total_amount" para asegurarse de que no sea NULL
    await queryInterface.changeColumn("orders", "total_amount", {
      type: Sequelize.FLOAT,
      allowNull: false,
      defaultValue: 0,
    });

    // 4️⃣ Agregar la columna "notes" para comentarios o indicaciones
    await queryInterface.addColumn("orders", "notes", {
      type: Sequelize.TEXT, // Usamos TEXT porque pueden ser notas largas
      allowNull: true, // Puede ser NULL si no hay notas
    });

    // 5️⃣ Agregar la columna "completed_at" para registrar cuando la orden fue completada
    await queryInterface.addColumn("orders", "completed_at", {
      type: Sequelize.DATE, // Almacena fecha y hora
      allowNull: true, // Será NULL hasta que la orden se complete
    });

    // 6️⃣ Agregar la columna "table_number" para el número de mesa
    await queryInterface.addColumn("orders", "table_number", {
      type: Sequelize.INTEGER,
      allowNull: true, // Puede ser NULL en caso de pedidos para llevar
    });

    // 7️⃣ Agregar la columna "customer_name" para el nombre del cliente
    await queryInterface.addColumn("orders", "customer_name", {
      type: Sequelize.STRING, // Nombre corto del cliente
      allowNull: true, // Puede ser NULL si no se proporciona el nombre
    });
  },

  down: async (queryInterface, Sequelize) => {
    // 8️⃣ Revertir la migración eliminando las columnas agregadas
    await queryInterface.removeColumn("orders", "subtotal");
    await queryInterface.removeColumn("orders", "tip");
    await queryInterface.removeColumn("orders", "notes");
    await queryInterface.removeColumn("orders", "completed_at");
    await queryInterface.removeColumn("orders", "table_number");
    await queryInterface.removeColumn("orders", "customer_name");

    // 9️⃣ Revertir el cambio en "total_amount"
    await queryInterface.changeColumn("orders", "total_amount", {
      type: Sequelize.FLOAT,
      allowNull: true,
    });
  },
};
