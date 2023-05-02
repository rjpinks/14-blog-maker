const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

//Therer is something not right with these bc it's making a unnecessairy column
Blog.belongsTo(User, {
    foreignKey: "user_username"
});

Comment.belongsTo(User, {
    foreignKey: "user_username"
});

module.exports = { User, Comment, Blog };