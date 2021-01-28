// Suppliers Controller CRUD

const Suppliers = require('../models').Suppliers

module.exports = {
  async createSuppliers(req, res) {
    try {
      const suppliersCollection = await Suppliers.create({
        supplierName: req.body.supplierName,
        contactName: req.body.contactName,
        Address: req.body.Address,
        city: req.body.city,
        postalCode: req.body.postalCode,
        country: req.body.country,
        phoneNumber: req.body.phoneNumber,
        userID:req.body.userID
      })
      if (suppliersCollection) {
        res.status(200).send(suppliersCollection)
      }else{
        res.status(400).send("SomeThing Went Wrong");
      }
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  },

  async findAllSuppliers(req,res){
    try {
      const suppliersCollection = await Suppliers.findAll({});
      res.status(200).send(suppliersCollection);
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}
