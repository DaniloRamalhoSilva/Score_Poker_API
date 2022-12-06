module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('configs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    pointsFirst: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'points_first',
    },
    pointsSecond: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'points_second',
    },
    pointsThird: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'points_third',
    },
    minUsers: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'min_users',
    },
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('configs');
  },
};
