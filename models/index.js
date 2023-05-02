const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');
 
Blog.belongsTo(User, {
    foreignKey: "user_username"
});

Comment.belongsTo(User, {
    foreignKey: "user_username"
});

module.exports = { User, Comment, Blog };