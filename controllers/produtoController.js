const Produto = require('../models/Produto');

exports.getAllProdutos = async (req, res) => {
  try {
    const produtos = await Produto.findAll();
    res.json(produtos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createProduto = async (req, res) => {
  try {
    const { nome, preco, quantidade, categoria_id } = req.body;
    const produto = await Produto.create({ nome, preco, quantidade, categoria_id });
    res.status(201).json(produto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
