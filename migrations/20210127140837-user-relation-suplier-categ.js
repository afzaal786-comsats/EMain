'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.addColumn("Suppliers",'userID',{
      type: Sequelize.INTEGER,
      references : {
        model : 'Users',
        key : 'id',
        as : 'userID'
      },
   })
   queryInterface.addColumn("Categories",'userID',{
    type: Sequelize.INTEGER,
    references : {
      model : 'Users',
      key : 'id',
      as : 'userID'
    },
 })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Suppliers",'userID')
    queryInterface.removeColumn("Categories",'userID')
  }
};
