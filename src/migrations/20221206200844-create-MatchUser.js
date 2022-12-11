module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('match_users', {
      matchId: {
        type: Sequelize.INTEGER,
        field: 'match_id',
        references: {
          model: 'matchs',
          key: 'id',
        },
        primaryKey: true,
      },
      userId: {
        type: Sequelize.INTEGER,
        field: 'user_id',
        references: {
          model: 'users',
          key: 'id',
        },
        primaryKey: true,
      },
    });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('Match_users');
  },
};
