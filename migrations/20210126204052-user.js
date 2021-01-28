'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.createTable("Users",{
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name:{
        type:Sequelize.STRING
      },
      email:{
        allowNull: false,
        type:Sequelize.STRING
      },
      password:{
        allowNull: false,
        type:Sequelize.STRING
      },
      address:{
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable('Users')
  }
};
