const { verifyToken } = require('../auth/jwtFunctions');
const { Tables, User } = require('../models');

const model = Tables;

const create = async (token) => {
  const { data: { userId } } = verifyToken(token);
  const { id } = await model.create({ userId });
  const resut = await model.findByPk(id, {
    attributes: { exclude: ['userId'] },
    include: [{
      model: User,
      as: 'user',
      attributes: { exclude: ['password', 'creatDate', 'image', 'creatDate'] },
    }],
  });
  return { type: null, message: resut };
};

module.exports = { create };
