module.exports = (sequelize, DataTypes) => {
  const Table = sequelize.define('Tables', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    creatDate: {
      type: 'TIMESTAMP',
      allowNull: false,
      defaultValue: new Date(),
    },
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    timestamps: false,
    tableName: 'tables',
    underscored: true,
  });

  Table.associate = (models) => {
    Table.belongsTo(models.User, {
      foreignKey: 'userId',
      as: 'user',
    });
  };

  return Table;
};
