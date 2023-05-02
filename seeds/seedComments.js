const { Comment } = require('../models/');
const Sequelize = require("sequelize");

const commentData = [
    {
        comment: "Example comment 01",
        comment_creater: "Example comment_creater 01",
        date_created: "01/01/2023"
    },
    {
        comment: "Example comment 02",
        comment_creater: "Example comment_creater 02",
        date_created: "01/01/2023"
    },
    {
        comment: "Example comment 03",
        comment_creater: "Example comment_creater 03",
        date_created: "01/01/2023"
    },
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;