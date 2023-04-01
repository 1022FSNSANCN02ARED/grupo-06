module.exports = (sequelize, DataTypes) => {
    let alias = "hairdressers";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            DataTypes: DataTypes.STRING(200),
        },
    };

    let config = {
        tablename: "peluqueros",
        timestamps: false,
    };

    const Hairdresser = sequelize.define(alias, cols, config);

    Hairdresser.associate = () => {
        Hairdresser.hasMany =
            (models.turns,
            {
                as: "turns",
                foreignKey: "peluquero_id",
            });
    };

    return Hairdresser;
};
