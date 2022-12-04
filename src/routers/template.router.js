const express = require('express');
const templateController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/verifyToken');

const router = express.Router();

router.get('/search', verifyToken, templateController.search);
router.get('/', verifyToken, templateController.getAll);
router.get('/:id', verifyToken, templateController.getById);
router.post('/', verifyToken, templateController.create);
router.put('/:id', verifyToken, templateController.upDateById);
router.delete('/:id', verifyToken, templateController.deleteById);

module.exports = router;
