'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.createTable("Categories",{
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    categoryName: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    createdAt:{
      allowNull: false,
      type: Sequelize.DATE,
    },
    updatedAt:{
      allowNull: false,
      type: Sequelize.DATE,
    }
   })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Categories')
  }
};
