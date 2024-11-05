require('dotenv').config();
const sequelize = require('./models').sequelize;
const express = require('express');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const produtoRoutes = require('./routes/produtoRoutes');

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/produtos', produtoRoutes);

sequelize.sync({ alter: true })
  .then(() => {
    console.log('Todos os modelos foram sincronizados com o banco de dados.');
  })
  .catch(error => {
    console.error('Erro ao sincronizar os modelos:', error);
  });

sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch(error => console.log('Erro ao sincronizar com o banco de dados:', error));

