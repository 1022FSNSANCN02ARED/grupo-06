module.exports = (sequelize, DataTypes) => {
    let alias = "turns";

    let cols = {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        fecha: {
            DataTypes: DataTypes.DATEONLY,
            allowNull: false,
        },
        horario: {
            DataTypes: DataTypes.TIME,
            allowNull: false,
        },
        user_id: {
            DataTypes: DataTypes.INTEGER,
            allowNull: false,
        },
        peluquero_id: {
            DataTypes: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    };

    let config = {
        tablename: "turnos",
        timestamps: false,
    };

    const Turn = sequelize.define(alias, cols, config);

    Turn.associate = (models) => {
        (Turn.belongsTo = models.Users),
            {
                as: Users,
                foreignKey: user_id,
            };
    };

    Turn.associate = (models) => {
        Turn.belongsTo =
            (models.hairdressers,
            {
                as: "hairdressers",
                foreignKey: "peluquero_id",
            });
    };

    return Turn;
};
