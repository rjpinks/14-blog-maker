const router = require('express').Router();
const { User } = require('../../models');
const sequelize = require("../../config/connection");

router.get('/', async (req, res) => {
    try {
    sequelize.query("SELECT * FROM user;")
      .then(results => {
        res.status(200).json(results)
      })
  
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const oneUser = sequelize.query(`SELECT * FROM user WHERE id = '${req.params.id}';`)
        .then(results => {
          res.status(200).json(results)
        })
  
      if (!oneUser) {
        res.status(404).json({ message: "Sorry, we didn't find an entry with that id" });
        return;
      }
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //I might need to adjust the .create()'s argument in the future, but it's ok for now
  router.post('/', async (req, res) => {
    try {
      const newUser = await User.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
      });
      res.status(200).json(newUser);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;