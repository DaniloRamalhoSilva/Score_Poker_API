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
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('match');
  },
};
