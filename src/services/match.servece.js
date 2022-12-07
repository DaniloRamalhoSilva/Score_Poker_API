const { Matchs, sequelize } = require('../models');
const configService = require('./config.servece');
const tableService = require('./table.servece');
const matchUserService = require('./matchUser.servece');

let transaction;

const createMatchUser = async (post, matchId) => {
  try {
    const { userIds, userIdfirst, userIdsecond, userIdthird } = post;
    const { message: { pointsFirst, pointsSecond, pointsThird } } = await configService.getConfig();

    await Promise.all(userIds.map(async (userId) => {
      await matchUserService.create(matchId, userId, transaction);
    }));

    await matchUserService.update(1, pointsFirst, matchId, userIdfirst, transaction);
    await matchUserService.update(2, pointsSecond, matchId, userIdsecond, transaction);
    await matchUserService.update(3, pointsThird, matchId, userIdthird, transaction);

    return { type: null, message: '' };
  } catch (error) {
    await transaction.rollback();
    return { type: 'TRANSACTION', message: error.message };
  }
};

const create = async ({ id: tableId, post }) => {
  const table = await tableService.getById(tableId);
  if (table.type) return { type: table.type, message: table.message };

  transaction = await sequelize.transaction();
  const { id: matchId } = await Matchs.create({ tableId }, { transaction });

  const MatchUser = await createMatchUser(post, matchId);
  if (MatchUser.type) return { type: MatchUser.type, message: MatchUser.message };

  await transaction.commit();
  return { type: null, message: { matchId, tableId } };
};

module.exports = { create };
