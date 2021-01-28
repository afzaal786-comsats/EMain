// Employee Model

module.exports=(sequelize,DataTypes)=>{
    let Employees =sequelize.define('Employees',{
        lastName: DataTypes.STRING,
        firstName: DataTypes.STRING,
        address: DataTypes.STRING,
        contactNumber: DataTypes.STRING,
        education: DataTypes.STRING,
        notes: DataTypes.STRING,
    });

    return Employees;
}