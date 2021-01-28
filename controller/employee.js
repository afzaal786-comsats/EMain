// Employees Controller CRUD

const Employee = require("../models").Employees;
module.exports = {

  // to create a new Employees
  async createEmployee(req, res) {
    try {
      const employeeCollection = await Employee.create({
        lastName: req.body.lastName,
        firstName: req.body.firstName,
        address: req.body.address,
        contactNumber: req.body.contactNumber,
        education: req.body.education,
        notes: req.body.notes,
        userID : req.body.userID
      });
      res.status(200).send(employeeCollection);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },


   // find All Employee 
   async findAllEmployee(req,res){
    try {
      const employeeCollection = await Employee.findAll({});
      res.status(200).send(employeeCollection);
    } catch (error) {
      console.log(error);
      res.status(500).send(error);
    }
  },
 
};
