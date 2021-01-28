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
  });


  Suppliers.associate = function(models) {
    Suppliers.hasMany(models.Products,{
        foreignKey : 'SupplierID',
        as : 'products'
    });
};

  return Suppliers
}
