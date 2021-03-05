//Categories Controller

const Categories = require('../models').Categories;
let message = "";

module.exports = {

    // create New Category
    async createCategory(req, res) {
        let userId = "";

        try {
            if (req.body.userId === "" || req.body.userId === null || req.body.userId === undefined) {
                userId = req.payload
            } else {
                userId = req.body.userId
            }
            const categCollection = await Categories.create({
                name: req.body.name,
                description: req.body.description,
                userId: userId
            });
            if (categCollection) {
                res.status(200).send({ categCollection: categCollection });
            } else {
                message = "Something Went Wrong"
                res.status(400).send({ message: message });
            }
        } catch (error) {
            res.status(404).send(error)
        }
    },


    // find All Categories
    async findAllCategories(req, res) {
        try {
            const categCollection = await Categories.findAll({
                where: {
                    userId: req.payload
                }
            });
            if (categCollection) {
                res.status(200).send({ categCollection: categCollection });
            } else {
                message = "No Record Found"
                res.status(400).send({ message: message });
            }
        } catch (error) {
            res.status(404).send(error)
        }
    },


    // find Category By id
    async findCategoryById(req, res) {
        try {
            const categCollection = await Categories.findOne({
                where: {
                    userId: req.payload,
                    id: req.params.id
                }
            });
            if (categCollection) {
                res.status(200).send({ categCollection: categCollection });
            } else {
                message = "No Record Found"
                res.status(400).send({ message: message });
            }
        } catch (error) {
            res.status(404).send(error)
        }
    },

    // update Category
    async updateCategory(req, res) {
        try {
            let userId = "";

            if (req.body.userId === "" || req.body.userId === null || req.body.userId === undefined) {
                userId = req.payload
            } else {
                userId = req.body.userId
            }
            const categCollection = await Categories.findOne({
                where: {
                    userId: userId,
                    id: req.body.id
                }
            });

            if (categCollection) {
                const updatedCollection = await categCollection.update({
                    name: req.body.name,
                    description: req.body.description,
                    userId: userId
                });
                if (updatedCollection) {
                    res.status(200).send({ updatedCollection: updatedCollection });
                } else {
                    message = "Can't Update Record"
                    res.status(400).send({ message: message });
                }
            } else {
                message = "Record Not Found"
                res.status(400).send({ message: message });
            }

        } catch (error) {
            res.status(404).send(error)
        }
    }

}