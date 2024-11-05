const Cliente = require('../models/Cliente');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { nome, altura, nascim, cidade_id, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const cliente = await Cliente.create({ nome, altura, nascim, cidade_id, password: hashedPassword });
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { nome, password } = req.body;
    const cliente = await Cliente.findOne({ where: { nome } });
    if (!cliente || !(await bcrypt.compare(password, cliente.password))) {
      return res.status(401).json({ message: 'Nome ou senha inválidos' });
    }
    const token = jwt.sign({ id: cliente.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
