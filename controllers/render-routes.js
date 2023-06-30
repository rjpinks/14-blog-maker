const router = require('express').Router();
const { Blog } = require('../models');

router.get("/", async (req, res) => {
    Blog.findAll()
      .then(results => {
        const blog = results.map(result => result.get({ plain: true }))
        res.render('home', {
          username: '',
          blogs: blog
        })
      })
  });
  
router.get("/dashboard", async (req, res) => {
    res.render('dashboard');
  });
  
router.get('/signup', async (req, res) => {
    res.render('signup');
  });
  
router.get('/login', async (req, res) => {
    res.render('login');
  });

module.exports = router