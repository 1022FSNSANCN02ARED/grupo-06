module.exports = function(sequelize, dataTypes) {
    const Category = sequelize.define('categories', {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            primaryKey: true
        },
        name: {
            type: dataTypes.STRING(200),
            allowNull: false
        },
        logo: {
            type: dataTypes.STRING(200),
            allowNull: false
        }
    },
    {   
        tableName: 'categories',
        timestamps: false
    })

    //associating categories with each product (1:M)
    Categorie.associate = function(models) {
        Categorie.belongsTo(models.Product, {
            as: 'products',
            foreignKey: 'category_id'
        });
    }

    return Category;
}