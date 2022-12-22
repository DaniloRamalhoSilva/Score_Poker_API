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

const close = async (id) => {
  const table = await model.findOne({ where: { id } });
  if (!table) {
    return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  }
  const tableClose = await model.update({ isOpen: false }, { where: { id } });
  return { type: null, message: tableClose };
};

const getAllOpen = async () => {
  const tablesOpen = await model.findAll({ where: { isOpen: true } });
  return { type: null, message: tablesOpen };
};

module.exports = {
  create,
  getById,
  close,
  getAllOpen,
};
