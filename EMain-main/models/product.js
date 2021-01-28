// Products Schema 

module.exports=(sequelize,DataTypes)=>{
    let Products = sequelize.define('Products',{
        productName : DataTypes.STRING,
        unit	: DataTypes.STRING,
        price	: DataTypes.STRING,
    });

    Products.associate = function (models) {
        Products.belongsTo(models.Categories,{
            onDelete : "CASCADE",
            foreignKey : 'categoryID'
        });
        Products.belongsTo(models.Suppliers,{
            onDelete : "CASCADE",
            foreignKey : 'SupplierID'
        });
    };


    return Products;
}