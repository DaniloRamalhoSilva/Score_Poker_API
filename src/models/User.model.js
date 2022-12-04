module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    creatDate: {
      type: 'TIMESTAMP',
      allowNull: false,
      defaultValue: new Date(),
    },
  }, {
    timestamps: false,
    tableName: 'users',
    underscored: true,
  });

  /*  User.associate = (models) => {
     User.hasMany(models.BlogPost,
       { foreignKey: 'userId', as: 'blog_posts' });
   }; */

  return User;
};
