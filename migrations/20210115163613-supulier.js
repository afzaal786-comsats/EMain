'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable("Suppliers",{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      supplierName:{
        type:Sequelize.STRING
      },
      contactName:{
        type:Sequelize.STRING
      },
      Address:{
        type:Sequelize.STRING
      },
      city:{
        type:Sequelize.STRING
      },
      postalCode:{
        type:Sequelize.STRING
      },
      country:{
        type:Sequelize.STRING
      },
      phoneNumber:{
        type:Sequelize.STRING
      }
   })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("Suppliers")
  }
};
