const { Op } = require('sequelize');
const { createToken } = require('../auth/jwtFunctions');
const { User } = require('../models');

const model = User;

const validatesUserExists = async (id) => {
  const resut = await model.findByPk(id, { attributes: { exclude: ['password'] } });
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  return { type: null, message: resut };
};

const getByUserAndPassword = async ({ password, name }) => {
  const user = await User.findOne({ where: { password, name } });
  if (!user || user.password !== password) {
    return { type: 'INVALID_FILDS', message: 'invalid login or password' };
  }

  const token = createToken(user);

  return { type: null, message: token };
};

const create = async (post) => {
  const user = await model.findOne({ where: { name: post.name } });

  if (user) {
    return { type: 'ALREADY_REGISTERED', message: 'User already registered' };
  }
  const resut = await model.create(post);
  const { id, name, image, creatDate } = resut;
  return { type: null, message: { id, name, image, creatDate } };
};

const getAll = async () => {
  const resut = await model.findAll({ attributes: { exclude: ['password'] } });
  return { type: null, message: resut };
};

const getById = async (id) => {
  const { type, message } = await validatesUserExists(id);
  if (type) return { type, message };
  return { type: null, message };
};

const upDateById = async ({ id, post }) => {
  const { type, message } = await validatesUserExists(id);
  if (type) return { type, message };
  await model.update(post, { where: { id } });
  const { message: user } = await getById(id);
  return { type: null, message: user };
};

const deleteById = async (id) => {
  const { type, message } = await validatesUserExists(id);
  if (type) return { type, message };
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
