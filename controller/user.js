//User Registeration

const Users = require('../models').Users;
const { sign } = require("jsonwebtoken");
let message = "";

module.exports = {

    async createUser(req, res) {
        try {
            if (req.body.email === "" || req.body.password === "") {
                message = "Please Enter Email or Password"
                res.status(400).send({ message: message });
                return;
            }
            const already_Exist = await Users.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (already_Exist) {
                message = "Email Already Registered"
                res.status(400).send({ message: message });
            } else {
                const userCollection = await Users.create({
                    name: req.body.name,
                    email: req.body.email,
                    password: req.body.password,
                    address: req.body.address,
                    city: req.body.city,
                    postalCode: req.body.postalCode,
                    country: req.body.country,
                });
                if (userCollection) {
                    res.status(200).send({ userCollection: userCollection });
                } else {
                    res.status(404).send("Something Went Wrong")
                }
            }
        } catch (error) {
            res.status(404).send(error)
        }
    },


    async loginUser(req, res) {
        try {
            if (req.body.email === "" || req.body.password === "") {
                message = "Please Enter Email or Password"
                res.status(400).send({ message: message });
                return;
            }
            const userCollection = await Users.findOne({
                where: {
                    email: req.body.email
                }
            });
            if (userCollection) {
                if (userCollection.password === req.body.password) {
                    const jsontoken = sign({ userCollection: userCollection }, "qwe1234", {
                        expiresIn: "1h"
                    });
                    res.status(200).send({
                        token: jsontoken
                    })
                } else {
                    message = "Please Enter Valid Password"
                    res.status(400).send({ message: message })
                }
            } else {
                message = "User Not Found"
                res.status(400).send({ message: message })
            }
        } catch (error) {
            res.status(404).send(error)
        }
    },


    async findUserByEmail(req, res) {
        try {
            const userCollection = await Users.findOne({
                where: {
                    email: req.params.email
                }
            });
            if (userCollection) {
                res.status(200).send({
                    userCollection: userCollection
                })

            } else {
                message = "User Not Found"
                res.status(400).send({ message: message })
            }
        } catch (error) {
            res.status(404).send(error)
        }
    }
}