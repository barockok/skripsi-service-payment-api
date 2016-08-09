'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    queryInterface.createTable(
      'transactions',
      {
        id: {
          type: Sequelize.STRING,
          primaryKey: true
        },
        transaction_time: {
          type: Sequelize.DATE
        },
        merchant_id: {
          type: Sequelize.STRING
        },
        bank_mid: {
          type: Sequelize.STRING
        },
        gross_amount: {
          type: Sequelize.BIGINT
        },
        customer_name: {
          type: Sequelize.STRING
        },
        customer_email: {
          type: Sequelize.STRING
        },
        status: {
          type: Sequelize.STRING
        },
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    queryInterface.dropTable('transactions')
  }
};
