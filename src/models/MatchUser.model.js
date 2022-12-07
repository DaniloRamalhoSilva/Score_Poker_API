module.exports = (sequelize, DataTypes) => {
  const MatchUser = sequelize.define('MatchUser', {
    matchId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    podium: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    scored: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
  }, {
    timestamps: false,
    underscored: true,
    tableName: 'match_users',
  });

  MatchUser.associate = (models) => {
    models.Matchs.belongsToMany(models.User, {
      as: 'users',
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
