'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.addColumn("Customers",'userID',{
      type: Sequelize.INTEGER,
      references : {
        model : 'Users',
        key : 'id',
        as : 'userID'
      },
   })
   queryInterface.addColumn("Employees",'userID',{
    type: Sequelize.INTEGER,
    references : {
      model : 'Users',
      key : 'id',
      as : 'userID'
    },
 })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Customers",'userID')
    queryInterface.removeColumn("Employees",'userID')
  }
};
