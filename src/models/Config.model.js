module.exports = (sequelize, DataTypes) => {
  const Config = sequelize.define('Configs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    minUsers: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    timestamps: false,
    tableName: 'configs',
    underscored: true,
  });

  return Config;
};
