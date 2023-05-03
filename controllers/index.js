const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

router.get("/", async (req, res) => {
  res.send("Hello");
})

router.get("/dashboard", async (req, res) => {
  res.sendFile(/* dashboard handlebar will go here */)
})

module.exports = router;