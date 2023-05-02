const router = require('express').Router();
const { Comment } = require('../../models');
const sequelize = require("../../config/connection");

router.get('/', async (req, res) => {
    try {
    sequelize.query("SELECT * FROM comment;")
      .then(results => {
        res.status(200).json(results)
      })
  
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const oneCategory = sequelize.query(`SELECT * FROM comment WHERE id = '${req.params.id}';`)
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

  //I might need to adjust the .create()'s argument in the future, but it's ok for now
  router.post('/', async (req, res) => {
    try {
      const newComment = await Comment.create({
        comment: req.body.comment,
        date_created: req.body.date_created,
      });
      res.status(200).json(newComment);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;