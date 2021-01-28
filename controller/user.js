// User Creation 
const Users = require('../models').Users;

module.exports = {

  // create New User
  async createUser(req, res) {

    try {
      const alreadyExistCollection = await Users.findOne({
        where: {
          email: req.body.email
        }
      })
      if (alreadyExistCollection) {
        res.status(400).send("Email Already Exists");
        return;
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
        res.status(200).send(userCollection);
      }

    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },


  // login api 
  async loginUser(req, res) {
    try {
      const userCollection = await Users.findOne({
        where: {
          email: req.body.email
        }
      });
      if (userCollection) {
        console.log("Collection ", userCollection.password);
        if(userCollection.password === req.body.password){
          res.status(200).send(userCollection);
        }else{
          res.status(400).send("Invalid Password");
        }
      } else {
        res.status(400).send("Invalid Email");
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }

}
