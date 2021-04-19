const express = require('express');
const router = express.Router();

router.get('/test', (req, res) => res.json({msg: "The users' router is working"}))

module.exports = router;

