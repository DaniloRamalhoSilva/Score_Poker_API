const express = require('express');
const userController = require('../controllers/user.controllers');
// const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();
const controller = userController;

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.upDateById);
router.delete('/:id', controller.deleteById);

module.exports = router;
