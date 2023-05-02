const router = require('express').Router();
const { Blog } = require('../../models');
const sequelize = require("../../config/connection");

router.get('/', async (req, res) => {
    try {
    sequelize.query("SELECT * FROM blog")
      .then(results => {
        res.status(200).json(results)
      })
  
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const oneCategory = sequelize.query(`SELECT * FROM blog WHERE id = '${req.params.id}';`)
        .then(results => {
          res.status(200).json(results)
        })
  
      if (!oneCategory) {
        res.status(404).json({ message: "Sorry, we didn't find an entry with that id" });
        return;
      }
      
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.post('/', async (req, res) => {
    try {
      const newBlog = await Blog.create({
        post_title: req.body.post_title,
        content: req.body.content,
        creater_name: req.body.creater_name,
        date_created: req.body.date_created,
      });
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;