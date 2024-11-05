
module.exports = (sequelize, DataTypes) => {
    const Cidade = sequelize.define('Cidade', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    }, {
      tableName: 'cidades',
      timestamps: false,
    });
  
    return Cidade;
  };
  