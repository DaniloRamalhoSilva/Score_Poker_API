const matchUserService = require('../services/matchUser.servece');
const errorMap = require('../utils/errorMap');

const service = matchUserService;

const findOverallRating = async (req, res) => {
  const { type, message } = await service.findOverallRating();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = { findOverallRating };
