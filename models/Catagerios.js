// Categories Schema

module.exports = (sequelize, DataTypes) => {
    let Categories = sequelize.define('Categories', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        userId: DataTypes.INTEGER,
    });

    Categories.associate = function (models) {
        Categories.belongsTo(models.Users, {
            onDelete: "CASCADE",
            foreignKey: 'userId'
        });
    };
    return Categories
}
