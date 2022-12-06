module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('configs',
      [{
        id: 1,
        points_first: 10,
        points_second: 5,
        points_third: 2,
        min_users: 6,
      }], { timestamps: false });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('confifs', null, {});
  },
};
