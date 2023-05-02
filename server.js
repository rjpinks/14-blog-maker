//required packages
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require('express-session');

//setting up port & express
const app = express();
const PORT = process.env.PORT || 3001;

//calls handlebars and sequelize connects to the db
const hbs = exphbs.create({});
const sequelize = require("./config/connection");

app.engine("handlebars", hbs.engine)
app.set("view engine", "handelbars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(require('./controllers'));

//starts the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
