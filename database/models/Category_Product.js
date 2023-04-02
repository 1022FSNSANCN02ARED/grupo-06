module.exports = function(sequelize, DataTypes) {
    let alias = "CategoryProduct";
    let cols = {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
      },
    };
    let config = {
      tableName: "category_product",
      timestamps: false,
    };
    let CategoryProduct = sequelize.define(alias, cols, config);
  
    CategoryProduct.associate = function(models) {
      CategoryProduct.belongsTo(models.Category, {
        as: "categories",
        foreignKey: "category_id",
      });
      CategoryProduct.belongsTo(models.Product, {
        as: "product",
        foreignKey: "product_id",
      });
    };
  
    return CategoryProduct;
  };