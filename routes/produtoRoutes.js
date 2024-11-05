const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', produtoController.getAllProdutos);
router.post('/', authMiddleware, produtoController.createProduto);

module.exports = router;

