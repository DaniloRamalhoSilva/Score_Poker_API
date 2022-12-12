const matchUserService = require('../services/matchUser.servece');
const errorMap = require('../utils/errorMap');

const service = matchUserService;

const findOverallRating = async (req, res) => {
  const { type, message } = await service.findOverallRating();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const findTableRanking = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await service.findTableRanking(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = {
  findOverallRating,
  findTableRanking,
};
