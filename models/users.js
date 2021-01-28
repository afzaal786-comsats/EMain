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
    Users.hasMany(models.Products, {
      foreignKey: 'userID',
      as: 'user'
    });
    Users.hasMany(models.Suppliers, {
      foreignKey: 'userID',
      as: 'userSupID'
    });
    Users.hasMany(models.Categories, {
      foreignKey: 'userID',
      as: 'userCatID'
    });
    Users.hasMany(models.Customers, {
      foreignKey: 'userID',
      as: 'user_customer_ID'
    });
    Users.hasMany(models.Employees, {
      foreignKey: 'userID',
      as: 'user_emp_ID'
    });
  };

  return Users
}
