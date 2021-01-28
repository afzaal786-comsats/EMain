'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.addColumn("Products",'productName',{
    type: Sequelize.STRING,
   })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Products",'productName')
  }
};
