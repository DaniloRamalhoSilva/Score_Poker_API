const tableService = require('../services/table.servece');
const errorMap = require('../utils/errorMap');

const service = tableService;

const create = async (req, res) => {
  const token = req.header('authorization');
  const { type, message } = await service.create(token);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const close = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await service.close(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const getAllOpen = async (_req, res) => {
  const { type, message } = await service.getAllOpen();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  create,
  close,
  getAllOpen,
};
