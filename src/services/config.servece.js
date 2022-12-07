const { Configs } = require('../models');

const model = Configs;
const IdConfig = 1;

const getConfig = async () => {
  const resut = await model.findByPk(IdConfig, { attributes: { exclude: ['id'] } });
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  return { type: null, message: resut };
};

const upDateById = async (post) => {
  await model.update(post, { where: { IdConfig } });
  return { type: null, message: post };
};

module.exports = {
  getConfig,
  upDateById,
};
