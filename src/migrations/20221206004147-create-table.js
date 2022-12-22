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
    isOpen: {
      allowNull: false,
      type: Sequelize.BOOLEAN,
      defaultValue: true,
      field: 'is_Open',
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      field: 'user_id',
      references: {
        model: 'users',
        key: 'id',
      },
    },
  }),

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.dropTable('tables');
  },
};
