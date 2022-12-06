const { Op } = require('sequelize');
const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const model = User;

const getByUserAndPassword = async ({ password, name }) => {
  const user = await User.findOne({ where: { password, name } });
  if (!user || user.password !== password) {
    return { type: 'INVALID_FILDS', message: 'Invalid fields' };
  }

  const token = createToken(user);

  return { type: null, message: token };
};

const create = async (post) => {
  const name = await model.findOne({ where: { name: post.name } });

  if (name) {
    return { type: 'ALREADY_REGISTERED', message: 'User already registered' };
  }
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
  getByUserAndPassword,
  create,
  getAll,
  getById,
  upDateById,
  deleteById,
  search,
};
