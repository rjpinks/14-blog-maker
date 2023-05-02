const { User } = require('../models/');
const Sequelize = require("sequelize");

const userData = [
    {
        username: "Example username 01",
        email: "example01@email.com",
        password: "Example Password 01",
    },
    {
        username: "Example username 02",
        email: "example02@email.com",
        password: "Example Password 02",
    },
    {
        username: "Example username 03",
        email: "example03@email.com",
        password: "Example Password 03",
    },
];

const seedUsers = () => Blog.bulkCreate(userData);

module.exports = seedUsers;