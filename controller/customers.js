// Customers Controller CRUD

const Customer = require("../models").Customers;
module.exports = {

  // to create a new Customer
  async createCustomer(req, res) {
    try {
      const customerCollection = await Customer.create({
        customerName: req.body.customerName,
        contactNumber: req.body.contactNumber,
        address: req.body.address,
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country,
        userID : req.body.userID
      });
      res.status(200).send(customerCollection);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },


  // find All customer 
  async findAllCustomers(req,res){
    try {
      const customerCollection = await Customer.findAll({});
      res.status(200).send(customerCollection);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
};
