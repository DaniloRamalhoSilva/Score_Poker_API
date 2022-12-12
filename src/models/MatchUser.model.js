// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, _DataTypes) => {
  const MatchUser = sequelize.define('MatchUser', {}, {
    timestamps: false,
    underscored: true,
    tableName: 'match_users',
  });

  MatchUser.associate = (models) => {
    models.Matchs.belongsToMany(models.User, {
      as: 'user',
      through: MatchUser,
      foreignKey: 'matchId',
      otherKey: 'userId',
    });

    models.User.belongsToMany(models.Matchs, {
      as: 'matchs',
      through: MatchUser,
      foreignKey: 'userId',
      otherKey: 'matchId',
    });
  };

  return MatchUser;
};
