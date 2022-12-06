const configService = require('../services/config.servece');
const errorMap = require('../utils/errorMap');

const service = configService;
const IdConfig = 1;

const getById = async (req, res) => {
  const { type, message } = await service.getById(IdConfig);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const upDateById = async (req, res) => {
  const post = req.body;
  const { type, message } = await service.upDateById({ id: 1, post });
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getById,
  upDateById,
};
