
module.exports = (sequelize, DataTypes) => {
    const PedidoProduto = sequelize.define('PedidoProduto', {
      pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'pedidos',
          key: 'id',
        },
      },
      produto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        references: {
          model: 'produtos',
          key: 'id',
        },
      },
      preco: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      quantidade: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
    }, {
      tableName: 'pedidos_produtos',
      timestamps: false,
    });
  
    return PedidoProduto;
  };
  