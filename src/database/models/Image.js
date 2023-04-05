module.exports= function (sequelize, DataTypes){
    let alias = 'images'
    let cols={
        id:{
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        fileRoute: {
            type: DataTypes.STRING(200),
            allowNull: false,
          },
    }
    let config= {
        tableName: "images",
        timestamps: false
    }
    let images = sequelize.define(alias, cols, config);
    images.associate = function(models){
        images.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id',
        });
    }
    return images;
}