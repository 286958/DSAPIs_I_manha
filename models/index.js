// models/index.js
const Sequelize = require('sequelize');
const sequelize = require('../database');

const Cidade = require('./Cidade')(sequelize, Sequelize);
const Cliente = require('./Cliente')(sequelize, Sequelize);
const Pedido = require('./Pedido')(sequelize, Sequelize);
const Categoria = require('./Categoria')(sequelize, Sequelize);
const Produto = require('./Produto')(sequelize, Sequelize);
const PedidoProduto = require('./PedidoProduto')(sequelize, Sequelize);

// Definir relacionamentos
Cidade.hasMany(Cliente, { foreignKey: 'cidade_id' });
Cliente.belongsTo(Cidade, { foreignKey: 'cidade_id' });

Cliente.hasMany(Pedido, { foreignKey: 'cliente_id' });
Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

Categoria.hasMany(Produto, { foreignKey: 'categoria_id' });
Produto.belongsTo(Categoria, { foreignKey: 'categoria_id' });

Pedido.belongsToMany(Produto, { through: PedidoProduto, foreignKey: 'pedido_id' });
Produto.belongsToMany(Pedido, { through: PedidoProduto, foreignKey: 'produto_id' });

module.exports = {
  sequelize,
  Cidade,
  Cliente,
  Pedido,
  Categoria,
  Produto,
  PedidoProduto,
};
