
module.exports = (sequelize, DataTypes) => {
    const Categoria = sequelize.define('Categoria', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nome: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    }, {
      tableName: 'categorias',
      timestamps: false,
    });
  
    return Categoria;
  };
  