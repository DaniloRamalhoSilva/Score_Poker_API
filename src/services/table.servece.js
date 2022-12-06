const { verifyToken } = require('../auth/jwtFunctions');
const { Tables } = require('../models');

const model = Tables;

const create = async (token) => {
  const { data } = verifyToken(token);
  const { id } = await model.create({ userId: data.userId });
  const { dataValues } = await model.findByPk(id, { attributes: { exclude: ['userId'] } });
  return { type: null, message: { ...dataValues, user: data } };
};

module.exports = { create };
