const express = require('express');
const configController = require('../controllers/config.controllers');
const { validateConfigFilds } = require('../middlewares/validateFilds');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();
const controller = configController;

router.get('/', controller.getConfig);
router.put('/', validateConfigFilds, verifyToken, controller.upDateById);

module.exports = router;
