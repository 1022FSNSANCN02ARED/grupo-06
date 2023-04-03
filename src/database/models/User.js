module.exports = function (sequelize, DataTypes) {
    const alias = "Users";
    const cols = {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cellphone: {
            type: DataTypes.BIGINT,
            allowNull: false,
        },
        avatar: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    };
    const config = {
        tableName: "users",
        timestamps: false,
    };
    const users = sequelize.define(alias, cols, config);
    users.associate = function (models) {
        users.hasMany(models.turnos, {
            foreignKey: "user_id",
            as: "turno",
        });
        users.hasMany(models.cart_products, {
            foreignKey: "user_id",
            as: "cart_product",
        });
    };

    users.associate = (models) => {
        (users.belongsTo = models.turns),
            {
                as: "turns",
                foreignKey: "user_id",
            };
    };
    return users;
};
