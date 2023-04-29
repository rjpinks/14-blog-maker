const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({});

const sequelize = require("./config/connection");

app.engine("handlebars", hbs.engine)
app.set("view engine", "handelbars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
