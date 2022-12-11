module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('matchs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    tableId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'table_id',
      references: {
        model: 'tables',
        key: 'id',
      },
    },
    userIdFirst: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id_first',
      eferences: {
        model: 'users',
        key: 'id',
      },
    },
    userIdSecond: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id_second',
      eferences: {
        model: 'users',
        key: 'id',
      },
    },
    userIdThird: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id_third',
      eferences: {
        model: 'users',
        key: 'id',
      },
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
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('match');
  },
};
