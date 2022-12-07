const configService = require('../services/config.servece');
const errorMap = require('../utils/errorMap');

const service = configService;

const getConfig = async (req, res) => {
  const { type, message } = await service.getConfig();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const upDateById = async (req, res) => {
  const post = req.body;
  const { type, message } = await service.upDateById(post);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  getConfig,
  upDateById,
};
