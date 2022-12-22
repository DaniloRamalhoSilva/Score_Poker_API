const express = require('express');
const verifyToken = require('../middlewares/verifyToken');
const { validateMatchFilds } = require('../middlewares/validateFilds');
const tableController = require('../controllers/table.controllers');
const matchController = require('../controllers/match.controllers');
const matchUserController = require('../controllers/matchUser.controllers');

const router = express.Router();

router.get('/', verifyToken, matchUserController.findOverallRating);
router.get('/:id/match/podium', verifyToken, matchUserController.findTableRanking);
router.post('/:id/match/podium', verifyToken, validateMatchFilds, matchController.create);

router.get('/open', verifyToken, tableController.getAllOpen);
router.post('/', verifyToken, tableController.create);
router.put('/:id', verifyToken, tableController.close);

module.exports = router;
