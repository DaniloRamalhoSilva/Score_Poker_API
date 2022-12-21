const Joi = require('joi');

const pontsSchema = Joi.number().integer().required().messages({ 'number.base': '"score" must be a number' });

const playersSchema = Joi.number().integer().required().messages({ 'number.base': '"players" must be a number' });

module.exports = {
  pontsSchema,
  playersSchema,
};
