const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection.js');
class Blog extends Model {}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    post_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    creater_name: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id'
        }
        //FORIEGN KEY: from user
    },
    // date_created: {
    //     type: DataTypes.DATE,
    //     allowNull: true
    // }
    //JOIN this table with comment in a query when displaying
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;
