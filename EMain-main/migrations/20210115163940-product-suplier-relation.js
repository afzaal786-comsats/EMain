'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.addColumn("Products",'SupplierID',{
      type: Sequelize.INTEGER,
      references : {
        model : 'Suppliers',
        key : 'id',
        as : 'SupplierID'
      },
   })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Products",'SupplierID')
  }
};
