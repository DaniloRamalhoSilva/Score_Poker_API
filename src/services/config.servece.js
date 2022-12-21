const { Configs } = require('../models');
const { playersSchema, pontsSchema } = require('./validations/schemas');

const model = Configs;
const IdConfig = 1;

const validation = (post) => {
  const { pointsFirst, pointsSecond, pointsThird, minUsers } = post;
  const { error: e1 } = pontsSchema.validate(pointsFirst);
  const { error: e2 } = pontsSchema.validate(pointsSecond);
  const { error: e3 } = pontsSchema.validate(pointsThird);
  const { error: erroPlayer } = playersSchema.validate(minUsers);

  if (e1) return { type: 'INVALID_VALUE', message: e1.message };
  if (e2) return { type: 'INVALID_VALUE', message: e2.message };
  if (e3) return { type: 'INVALID_VALUE', message: e3.message };
  if (erroPlayer) return { type: 'INVALID_VALUE', message: erroPlayer.message };

  const newPost = {
    pointsFirst: Number(pointsFirst),
    pointsSecond: Number(pointsSecond),
    pointsThird: Number(pointsThird),
    minUsers: Number(minUsers),
  };

  return { type: null, message: newPost };
};

const getConfig = async () => {
  const resut = await model.findByPk(IdConfig, { attributes: { exclude: ['id'] } });
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  return { type: null, message: resut };
};

const upDateById = async (post) => {
  const { type, message } = validation(post);
  if (type) return { type, message };

  await model.update(message, { where: { id: IdConfig } });
  return { type: null, message: post };
};

const createConfig = async (post) => {
  const { type, message } = validation(post);
  if (type) return { type, message };

  const resut = await model.create(message);
  return { type: null, message: resut };
};

module.exports = {
  getConfig,
  upDateById,
  createConfig,
};
