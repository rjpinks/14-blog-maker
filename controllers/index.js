const router = require('express').Router();
const apiRoutes = require('./api');
const { blogs } = require('../models')

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

router.get("/", async (req, res) => {
  blogs.findAll()
    .then(results => {
      const blog = results.map(result => result.get({ plain: true }))
      res.render('home', {
        username: '',
        blogs: data})
    })
});

router.get("/dashboard", async (req, res) => {
  res.render('dashboard');
});

router.get('/signup', async (req, res) => {
  res.render('signup');
});

router.get('login', async (req, res) => {
  res.render('login');
});

module.exports = router;