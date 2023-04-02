module.exports = function (sequelize, DataTypes) {
  let alias = "Product";
  let cols = {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 0).UNSIGNED,
      allowNull: false,
    },
    brand_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    discount: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
  };
  let config = {
    tableName: "products",
    timestamps: false,
  };
  let Product = sequelize.define(alias, cols, config);

  Product.associate = function (models) {
    Product.belongsToMany(models.Category, {
      as: "categories",
      through: "product_category",
      foreignKey: "product_id",
      otherKey: "category_id",
      timestamps: false,
    });
    /*Product.hasMany(models.Brand, {
      as: "brand",
      foreignKey: "brand_id",
    });
     Product.hasMany(models.Image, {
      as: "images",
      foreignKey: "product_id",
    });*/
  };

  return Product;
};