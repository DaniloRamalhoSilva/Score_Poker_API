const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const tableController = require('../controllers/table.controllers');
const matchController = require('../controllers/match.controllers');

const router = express.Router();

router.post('/:id/match/podium', verifyToken, matchController.create);
router.post('/', verifyToken, tableController.create);

module.exports = router;
