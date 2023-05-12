module.exports = (sequelize, DataTypes) => {
    let alias = "peluqueros";

    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: {
            type: DataTypes.STRING,
        },
        avatar: {
            type: DataTypes.STRING,
        },
        descripcion: {
            type: DataTypes.STRING,
        },
    };

    let config = {
        tablename: "peluqueros",
        timestamps: false,
    };

    const Hairdresser = sequelize.define(alias, cols, config);

    Hairdresser.associate = (models) => {
        Hairdresser.hasMany(models.turns, {
            as: "turns",
            foreignKey: "peluquero_id",
        });
    };

    return Hairdresser;
};
