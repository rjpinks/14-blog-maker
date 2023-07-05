//required packages
const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");
const session = require('express-session');

//setting up port & express
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//calls handlebars and sequelize connects to the db
const hbs = exphbs.create({  helpers });

app.use(
  session({
      secret: 'Super secret secret',
      resave: false,
      saveUninitialized: true,
      cookie: {
          path: '/',
          httpOnly: false,
          maxAge: 7200000 }, // 2 hour session 
      store: new SequelizeStore({
          db: sequelize,
        }),
  })
);

app.engine("handlebars", hbs.engine)
app.set("view engine", "handlebars");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers'));

//starts the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
