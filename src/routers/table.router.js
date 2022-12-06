const express = require('express');
const tableController = require('../controllers/table.controllers');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();
const controller = tableController;

router.post('/', verifyToken, controller.create);

module.exports = router;
