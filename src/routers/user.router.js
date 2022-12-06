const express = require('express');
const userController = require('../controllers/user.controllers');
const { validateUserFilds } = require('../middlewares/validateFilds');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();
const controller = userController;

router.get('/', verifyToken, controller.getAll);
router.get('/:id', verifyToken, controller.getById);
router.post('/', validateUserFilds, verifyToken, controller.create);
router.put('/:id', validateUserFilds, verifyToken, controller.upDateById);
router.delete('/:id', verifyToken, controller.deleteById);

module.exports = router;
