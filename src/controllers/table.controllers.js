const tableService = require('../services/table.servece');
const errorMap = require('../utils/errorMap');

const service = tableService;

const create = async (req, res) => {
  const token = req.header('authorization');
  const { type, message } = await service.create(token);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

module.exports = { create };
