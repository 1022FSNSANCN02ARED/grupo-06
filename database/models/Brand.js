module.exports= function (sequelize, DataTypes){
    let alias = 'brands'
    let cols={
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(200),
            allowNull: false,
          },
        imageLogo: {
            type: DataTypes.STRING(200),
            allowNull: false,
          },
        
    }
    let config= {
        tableName: "brands",
        timestamps: false
    }
    let brands = sequelize.define(alias, cols, config);
    brands.associate= function(models){
        brands.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'brand_id',
            timestamps: false
        });
        
        Product.hasMany(models.product, {
            as: "brand",
            foreignKey: "brand_id"
        })
    }
    return brands;
}