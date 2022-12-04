const userService = require('../services/user.servece');
const errorMap = require('../utils/errorMap');

const service = userService;

const create = async (req, res) => {
  const post = req.body;
  const { type, message } = await service.create(post);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
  const { type, message } = await service.getAll();
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await service.getById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const upDateById = async (req, res) => {
  const { id } = req.params;
  const post = req.body;
  const { type, message } = await service.upDateById({ id, post });
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

const deleteById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await service.deleteById(id);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(204).json(message);
};

const search = async (req, res) => {
  const { q } = req.query;
  const { type, message } = await service.search(q);
  if (type) return res.status(errorMap.mapError(type)).json({ message });
  return res.status(200).json(message);
};

module.exports = {
  create,
  getAll,
  getById,
  upDateById,
  deleteById,
  search,
};
