const { Blog } = require('../models/');
const Sequelize = require("sequelize");

const blogData = [
    {
        post_title: "Example post_title 01",
        content: "Example content 01",
        creater_name: "user01",
        date_created: "01/01/2023"
    },
    {
        post_title: "Example post_title 02",
        content: "Example content 02",
        creater_name: "user02",
        date_created: "01/01/2023"
    },
    {
        post_title: "Example post_title 03",
        content: "Example content 03",
        creater_name: "user03",
        date_created: "01/01/2023"
    },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;