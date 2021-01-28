// Suppliers Schema

module.exports = (sequelize, DataTypes) => {
  let Suppliers = sequelize.define('Suppliers', {
    supplierName: DataTypes.STRING,
    contactName: DataTypes.STRING,
    Address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    userID : DataTypes.INTEGER
  });


  Suppliers.associate = function (models) {
    Suppliers.hasMany(models.Products, {
      foreignKey: 'SupplierID',
      as: 'products'
    });
    Suppliers.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey: 'userID'
    });
  };

  return Suppliers
}
