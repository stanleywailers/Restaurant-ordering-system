const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface) => {
    // Obtén los IDs de los platos existentes
    const dishes = await queryInterface.sequelize.query(
      'SELECT id FROM dishes;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const dishIds = dishes.map((dish) => dish.id);

    const dishRatings = [];
    const NUM_RATINGS = 10;

    for (let i = 0; i < NUM_RATINGS; i++) {
      dishRatings.push({
        dish_id: faker.helpers.arrayElement(dishIds), // Usa un ID real de plato
        user_id: faker.number.int({ min: 1, max: 50 }), // Aquí también puedes usar datos reales si tienes usuarios
        rating: faker.number.int({ min: 1, max: 5 }), // Ratings entre 1 y 5
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert('ratings', dishRatings, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('ratings', null, {});
  }
};
