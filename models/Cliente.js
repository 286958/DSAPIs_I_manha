
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    altura: {
      type: DataTypes.DOUBLE,
      allowNull: true,
    },
    nascim: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    cidade_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cidades',
        key: 'id',
      },
    },
  }, {
    tableName: 'clientes',
    timestamps: false,
  });

  return Cliente;
};
