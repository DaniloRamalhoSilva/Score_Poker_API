module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('tables', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    creatDate: {
      allowNull: false,
      type: 'TIMESTAMP',
      field: 'creat_date',
    },
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('tables');
  },
};
