// models/Produto.js
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define('Produto', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    preco: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    quantidade: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    categoria_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'categorias',
        key: 'id',
      },
    },
  }, {
    tableName: 'produtos',
    timestamps: false,
  });

  return Produto;
};
