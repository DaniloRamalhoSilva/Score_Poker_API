const { Matchs, sequelize } = require('../models');
const configService = require('./config.servece');
const tableService = require('./table.servece');
const matchUserService = require('./matchUser.servece');

let transaction;

const create = async ({ id: tableId, post }) => {
  transaction = await sequelize.transaction();
  try {
    const { userIdFirst, userIdSecond, userIdThird, userIds } = post;
    const {
      message: {
        pointsFirst,
        pointsSecond,
        pointsThird,
        minUsers,
      },
    } = await configService.getConfig();

    if (userIds.length < minUsers) return { type: 'NOT_USER_ENOUGH', message: `the minimum number of participants is ${minUsers}` };

    const table = await tableService.getById(tableId);
    if (table.type) return { type: table.type, message: table.message };

    const { id: matchId } = await Matchs.create({
      tableId,
      userIdFirst,
      userIdSecond,
      userIdThird,
      pointsFirst,
      pointsSecond,
      pointsThird,
    }, { transaction });

    await Promise.all(userIds.map(async (userId) => {
      await matchUserService.create(matchId, userId, transaction);
    }));

    await transaction.commit();

    return { type: null, message: { matchId, tableId } };
  } catch (error) {
    await transaction.rollback();
    return { type: 'TRANSACTION', message: error.message };
  }
};

module.exports = { create };
