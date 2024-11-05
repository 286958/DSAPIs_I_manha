
module.exports = (sequelize, DataTypes) => {
    const Pedido = sequelize.define('Pedido', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      horario: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      endereco: {
        type: DataTypes.STRING(200),
        allowNull: true,
      },
      cliente_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id',
        },
      },
    }, {
      tableName: 'pedidos',
      timestamps: false,
    });
  
    return Pedido;
  };
  