const { Op } = require('sequelize');
const { UserModel } = require('../models');

const model = UserModel;

const create = async (post) => {
  const resut = await model.create(post);
  return { type: null, message: resut };
};

const getAll = async () => {
  const resut = await model.findAll();
  return { type: null, message: resut };
};

const getById = async (id) => {
  const resut = await model.findByPk(id);
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  return { type: null, message: resut };
};

const upDateById = async ({ id, post }) => {
  await model.update(post, { where: { id } });
  const { message } = await getById(id);
  return { type: null, message };
};

const deleteById = async (id) => {
  const resut = await model.findByPk(id);
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  await model.destroy({ where: { id } });
  return { type: null, message: 'successfully deleted!' };
};

const search = async (q) => {
  const wold = `%${q}%`;
  const resut = await model.findAll({ where: { title: { [Op.like]: wold } } });
  return { type: null, message: resut };
};

module.exports = {
  create,
  getAll,
  getById,
  upDateById,
  deleteById,
  search,
};
