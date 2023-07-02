const Blog = require('./Blog');
const Comment = require('./Comment');
const User = require('./User');

//Therer is something not right with these bc it's making a unnecessairy column
Blog.belongsTo(User, {
    foreignKey: 'creater_name',
});

Comment.belongsTo(Blog, {
    foreignKey: 'post_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
    foreignKey: 'post_id'
});

Comment.belongsTo(User, {
    foreignKey: 'comment_creater'
})

module.exports = { User, Comment, Blog };