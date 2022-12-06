module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        id: 1,
        name: 'danilo',
        password: '',
        image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Lewis_Hamilton_2016_Malaysia_2.jpg',
        creatDate: new Date(),
      },
      {
        id: 2,
        name: 'Michael Schumacher',
        password: '123456',
        image: 'https://sportbuzz.uol.com.br/media/_versions/gettyimages-52491565_widelg.jpg',
        creatDate: new Date(),
      },
      ], { timestamps: false });
  },

  // eslint-disable-next-line no-unused-vars
  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
