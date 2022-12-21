// const { fn, col } = require('sequelize');
const { MatchUser, Matchs, User } = require('../models');

const create = async (matchId, userId, transaction) => {
  await MatchUser.create({ matchId, userId }, { transaction });
};

const update = async (podium, scored, matchId, userId, transaction) => {
  await MatchUser.update({ podium, scored },
    { where: { matchId, userId }, transaction });
};

const findAllMatchsUser = async () => {
  const matchsUser = await User.findAll(
    {
      include: [
        { model: Matchs, as: 'matchs' },
      ],
    },
  );

  return { type: null, message: matchsUser };
};

const createIndividualUse = (users) => (
  users.map(({ id, matchs, name, image }) => {
    const maxPossible = matchs.reduce((acc, curr) => acc + curr.pointsFirst, 0);
    const scored = matchs.reduce((acc, curr) => {
      if (id === curr.userIdFirst) return acc + curr.pointsFirst;
      if (id === curr.userIdSecond) return acc + curr.pointsSecond;
      if (id === curr.userIdThird) return acc + curr.pointsThird;
      return acc;
    }, 0);

    return {
      id,
      name,
      image,
      matchs: matchs.length,
      maxPossible,
      scored,
      individualUse: (Number.isNaN((scored / maxPossible) * 100))
        ? 0 : (scored / maxPossible) * 100,
    };
  })
);

const createGroupUse = (users) => {
  const totalScore = users.reduce((acc, curr) => acc + curr.scored, 0);
  return users.map((user) => {
    const groupUse = (Number.isNaN((user.scored / totalScore) * 100))
      ? 0 : (user.scored / totalScore) * 100;
    const rank = groupUse + user.individualUse;
    return { ...user, groupUse, rank };
  });
};

const createRank = (users) => {
  const totalRank = users.reduce((acc, curr) => acc + curr.rank, 0);
  return users.map((user) => {
    const rank = (user.rank / totalRank) * 100;
    return { ...user, rank };
  });
};

const rankSort = (rank) => {
  const rankSortUsers = rank.map((user) => ((user.rank) ? user : { ...user, rank: 0 }));
  rankSortUsers.sort((a, b) => {
    if (a.rank < b.rank) return 1;
    if (a.rank > b.rank) return -1;
    return 0;
  });
  return rankSortUsers.map((user, index) => ({ ...user, position: index + 1 }));
};

const findOverallRating = async () => {
  const { message: matchsUser } = await findAllMatchsUser();

  const individualUseUsers = createIndividualUse(matchsUser);

  const groupUseUsers = createGroupUse(individualUseUsers);

  const rankUsers = createRank(groupUseUsers);

  const rankSortUsers = rankSort(rankUsers);

  return { type: null, message: rankSortUsers };
};

const filterTable = (tableId, users) => users.map(({ id, name, matchs, image }) => {
  const matchsFilter = matchs.filter((match) => match.tableId === Number(tableId));
  return {
    id,
    name,
    image,
    matchs: matchsFilter,
  };
});

const findTableRanking = async (id) => {
  const { message: matchsUser } = await findAllMatchsUser();

  const matchsUserTable = filterTable(id, matchsUser);

  const individualUseUsers = createIndividualUse(matchsUserTable);

  const { message: rankUsers } = await findOverallRating();

  const rankTable = individualUseUsers.map((user, index) => ({
    ...user,
    groupUse: rankUsers[index].groupUse,
    rank: rankUsers[index].rank,
  }));

  const usersTable = rankTable.filter((user) => user.matchs !== 0);

  return { type: null, message: usersTable };
};

module.exports = {
  create,
  update,
  findOverallRating,
  findTableRanking,
};
