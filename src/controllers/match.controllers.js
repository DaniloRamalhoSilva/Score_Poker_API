const matchService = require('../services/match.servece');
const errorMap = require('../utils/errorMap');

const service = matchService;

const create = async (req, res) => {
  const token = req.header('authorization');
  const { id } = req.params;
  const post = req.body;
  const { type, message } = await service.create({ token, id, post });
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = { create };
