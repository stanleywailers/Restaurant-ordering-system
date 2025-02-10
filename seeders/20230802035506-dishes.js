const { faker } = require('@faker-js/faker');

module.exports = {
  up: async (queryInterface) => {
    // Obtén los IDs de las categorías existentes
    const categories = await queryInterface.sequelize.query(
      'SELECT id FROM categories;',
      { type: queryInterface.sequelize.QueryTypes.SELECT }
    );
    const categoryIds = categories.map((category) => category.id);

    const dishes = [];
    const NUM_DISHES = 10;

    for (let i = 0; i < NUM_DISHES; i++) {
      dishes.push({
        name: faker.lorem.word(5),
        description: faker.lorem.words(10),
        price: faker.finance.amount({ min: 5, max: 30, dec: 2 }),
        image: faker.image.urlLoremFlickr({ category: 'food' }),
        category_id: faker.helpers.arrayElement(categoryIds), // Usa un ID real de categoría
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    await queryInterface.bulkInsert('dishes', dishes, {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('dishes', null, {});
  }
};
