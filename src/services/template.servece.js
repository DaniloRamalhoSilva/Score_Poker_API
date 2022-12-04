// import models

const create = async (post) => {
  const resut = await modules.create(post);
  return { type: null, message: resut };  
};

const getAll = async () => {
  const resut = await BlogPost.findAll();
  return { type: null, message: resut };
};

const getById = async (id) => {
  const resut = await modules.findByPk(id);
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  return { type: null, message: resut };
};

const upDateById = async ({ id, post }) => {
  await modules.update(post, { where: { id } });
  const { message } = await getById(id);
  return { type: null, message };
};

const deleteById = async (id) => {
  const resut = await modules.findByPk(id);
  if (!resut) return { type: 'NOT_REGISTERED', message: 'Register does not exist' };
  await modules.destroy({ where: { id } });
  return { type: null, message: 'successfully deleted!' };
};

const search = async (q) => {
  const wold = `%${q}%`;
  const users = await modules.findAll({
    where: { title: { [Op.like]: wold } }
  });
  return { type: null, message: users };
};

module.exports = {
  create,
  getAll,
  getById,
  upDateById,
  deleteById,
  search,
};
