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
    });
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err);
  }
});

//logging in and logging out
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { username: req.body.username } });

    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect username or password, please try again' });
      return;
    }

    req.session.userData = {
      id: userData.id,
      username: userData.username,
    };

    req.session.save(() => {
      req.session.logged_in = true;
      // res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
      res.json({ user: userData.username, message: 'Succesful login!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;