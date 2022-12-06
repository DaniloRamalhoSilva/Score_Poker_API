const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateUserFilds } = require('../middlewares/validateFilds');

const router = express.Router();
const controller = userController;

router.post('/', validateUserFilds, controller.logar);

module.exports = router;
