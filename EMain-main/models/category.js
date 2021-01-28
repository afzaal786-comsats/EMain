// Categories Schema 

module.exports=(sequelize,DataTypes)=>{
    let Categories = sequelize.define('Categories',{
        categoryName : DataTypes.STRING,
        description	: DataTypes.STRING,
    });
    
    Categories.associate = function(models) {
        Categories.hasMany(models.Products,{
            foreignKey : 'categoryID',
            as : 'products'
        });
    };

    return Categories;
}