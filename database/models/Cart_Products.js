module.exports = function(sequelize, DataTypes) {
    let alias = "CartProduct";
    let cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.STRING(200),
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
      }
    };
    let config = {
      tableName: "cart_product",
      timestamps: false,
    };
    let CartProduct = sequelize.define(alias, cols, config);
  
    CartProduct.associate = function(models) {
      CartProduct.belongsTo(models.Users, {
        as: "users",
        foreignKey: "user_id",
      });
      CartProduct.belongsTo(models.Product, {
        as: "product",
        foreignKey: "product_id",
      });
    };
  
    return CartProduct;
  };