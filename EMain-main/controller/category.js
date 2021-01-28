// Category Controller CRUD


const Category = require("../models").Categories;

module.exports={

    // create New Categ

    async createCategory(req,res){
        try {
            const categoryCollection = await Category.create({
                categoryName: req.body.categoryName,
                description: req.body.description
            });
            res.status(200).send(categoryCollection); 
        } catch (error) {
            console.log(error);
            res.status(400).send(error);
        }
    },


    // get all categories 
    async findAllCategories(req, res){

        try {
            const categoriesCollection = await Category.findAll({});
            res.status(200).send(categoriesCollection); 
        } catch (error) {
            console.log(error);
            res.status(400).send(error); 
        }
    }
}
