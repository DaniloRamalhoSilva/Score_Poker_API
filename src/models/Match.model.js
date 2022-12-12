module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Matchs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tableId: { type: DataTypes.INTEGER, foreignKey: true },
    userIdFirst: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    userIdSecond: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    userIdThird: {
      type: DataTypes.INTEGER,
      allowNull: false,
      foreignKey: true,
    },
    pointsFirst: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pointsSecond: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pointsThird: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'matchs',
    underscored: true,
  });

  Match.associate = (models) => {
    Match.belongsTo(models.Tables, {
      foreignKey: 'tableId',
      as: 'tables',
    });
    Match.belongsTo(models.User, {
      foreignKey: 'UserIdFirst',
      as: 'userFirst',
    });
    Match.belongsTo(models.User, {
      foreignKey: 'UserIdSecond',
      as: 'userSecond',
    });
    Match.belongsTo(models.User, {
      foreignKey: 'UserIdThird',
      as: 'userThird',
    });
  };

  return Match;
};
