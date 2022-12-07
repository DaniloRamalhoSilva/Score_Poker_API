const { MatchUser } = require('../models');

const create = async (matchId, userId, transaction) => {
  await MatchUser.create({ matchId, userId }, { transaction });
};

const update = async (podium, scored, matchId, userId, transaction) => {
  await MatchUser.update({ podium, scored },
    { where: { matchId, userId }, transaction });
};

module.exports = {
  create,
  update,
};
