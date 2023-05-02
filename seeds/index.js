const seedBlogs = require("./seedBlogs");
const seedComments = require("./seedComments");
const seedUsers = require("./seedUsers");

const sequelize = require('../config/connection');

const seedingFunction = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    
    await seedBlogs();
    console.log('\n----- BLOGS SEEDED -----\n');
  
    await seedComments();
    console.log('\n----- COMMENTS SEEDED -----\n');
  
    await seedUsers();
    console.log('\n----- USERS SEEDED -----\n');
  
    process.exit(0);
  };
  
seedingFunction();