export default (sequelize, DataTypes) => {
  return sequelize.define('Transaction', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    merchant_id: DataTypes.STRING,
    bank_mid: DataTypes.STRING,
    gross_amount: DataTypes.BIGINT,
    customer_name: DataTypes.STRING,
    customer_email: DataTypes.STRING,
    status: DataTypes.STRING,
    transaction_time: DataTypes.DATE,
  }, {tableName: 'transactions', timestamps: false})
}