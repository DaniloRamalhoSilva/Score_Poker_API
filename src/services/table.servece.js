const { verifyToken } = require('../auth/jwtFunctions');
const { Tables } = require('../models');

const model = Tables;

const create = async (token) => {
  const { data } = verifyToken(token);
  const { id } = await model.create({ userId: data.userId });
  const { dataValues } = await model.findByPk(id, { attributes: { exclude: ['userId'] } });
  return { type: null, message: { ...dataValues, user: data } };
};

const getById = async (id) => {
  const table = await model.findOne({ where: { id } });
  if (!table) {
    return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  }
  return { type: null, message: table };
};

module.exports = {
  create,
  getById,
};
