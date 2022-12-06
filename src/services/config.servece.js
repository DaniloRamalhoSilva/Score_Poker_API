const { Configs } = require('../models');

const model = Configs;
const getById = async (id) => {
  console.log(id);
  const resut = await model.findByPk(id);
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  return { type: null, message: resut };
};

const upDateById = async ({ id, post }) => {
  await model.update(post, { where: { id } });
  return { type: null, message: post };
};

module.exports = {
  getById,
  upDateById,
};
