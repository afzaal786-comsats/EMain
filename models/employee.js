// Employee Model

module.exports=(sequelize,DataTypes)=>{
    let Employees =sequelize.define('Employees',{
        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        address: DataTypes.STRING,
        contactNumber: DataTypes.STRING,
        education: DataTypes.STRING,
        notes: DataTypes.STRING,
        userID : DataTypes.INTEGER
    });

    Employees.associate = function (models) {
        Employees.hasMany(models.Users, {
          foreignKey: 'userID',
          as: 'user_emp_ID'
        });
        
      };
    return Employees;
}