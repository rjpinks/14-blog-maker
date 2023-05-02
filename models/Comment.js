const { Model, DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/connection.js');
class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        comment_creater: {
            type: DataTypes.STRING,
            allowNull: false
            //FORIEGN KEY: username from user table
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment',
    }     
)

module.exports = Comment;