'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   queryInterface.addColumn("Products",'userID',{
      type: Sequelize.INTEGER,
      references : {
        model : 'Users',
        key : 'id',
        as : 'userID'
      },
   })
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Products",'userID')
  }
};
