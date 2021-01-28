'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.addColumn("Suppliers",'createdAt',{
      allowNull: false,
      type: Sequelize.DATE,
     });
     queryInterface.addColumn("Suppliers", 'updatedAt' , {
      allowNull: false,
      type: Sequelize.DATE,
     })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Suppliers",'createdAt');
    queryInterface.removeColumn("Suppliers", 'updatedAt')
  }
};
