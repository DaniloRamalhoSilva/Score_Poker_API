module.exports = (sequelize, DataTypes) => {
  const Match = sequelize.define('Matchs', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tableId: { type: DataTypes.INTEGER, foreignKey: true },
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
  };

  return Match;
};
