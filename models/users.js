// Users Schema

module.exports = (sequelize, DataTypes) => {
    let Users = sequelize.define('Users', {
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        postalCode: DataTypes.STRING,
        country: DataTypes.STRING,
    });

    Users.associate = function (models) {
        Users.hasMany(models.Categories, {
            foreignKey: 'userId',
            as: 'userId'
        });
    }

    return Users
}
