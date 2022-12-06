module.exports = {
  up: async (queryInterface, Sequelize) => queryInterface.createTable('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      allowNull: false,
      type: Sequelize.STRING,
      field: 'name',
    },
    password: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    creatDate: {
      allowNull: false,
      type: 'TIMESTAMP',
      field: 'creat_date',
    },
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('users');
  },
};
