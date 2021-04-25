var DataTypes = require("sequelize").DataTypes;
var _SequelizeMeta = require("./SequelizeMeta");
var _customers = require("./customers");
var _order_details = require("./order_details");
var _orders = require("./orders");
var _products = require("./products");
var _transactions = require("./transactions");

function initModels(sequelize) {
  var SequelizeMeta = _SequelizeMeta(sequelize, DataTypes);
  var customers = _customers(sequelize, DataTypes);
  var order_details = _order_details(sequelize, DataTypes);
  var orders = _orders(sequelize, DataTypes);
  var products = _products(sequelize, DataTypes);
  var transactions = _transactions(sequelize, DataTypes);

  orders.belongsTo(customers, { as: "customer", foreignKey: "customer_id"});
  customers.hasMany(orders, { as: "orders", foreignKey: "customer_id"});
  orders.belongsTo(employees, { as: "employee", foreignKey: "employee_id"});
  employees.hasMany(orders, { as: "orders", foreignKey: "employee_id"});
  transactions.belongsTo(inventory_transaction_types, { as: "transaction_type_inventory_transaction_type", foreignKey: "transaction_type"});
  inventory_transaction_types.hasMany(transactions, { as: "transactions", foreignKey: "transaction_type"});
  order_details.belongsTo(order_details_status, { as: "status", foreignKey: "status_id"});
  order_details_status.hasMany(order_details, { as: "order_details", foreignKey: "status_id"});
  order_details.belongsTo(orders, { as: "order", foreignKey: "order_id"});
  orders.hasMany(order_details, { as: "order_details", foreignKey: "order_id"});
  transactions.belongsTo(orders, { as: "customer_order", foreignKey: "customer_order_id"});
  orders.hasMany(transactions, { as: "transactions", foreignKey: "customer_order_id"});
  orders.belongsTo(orders_status, { as: "status", foreignKey: "status_id"});
  orders_status.hasMany(orders, { as: "orders", foreignKey: "status_id"});
  orders.belongsTo(orders_tax_status, { as: "tax_status", foreignKey: "tax_status_id"});
  orders_tax_status.hasMany(orders, { as: "orders", foreignKey: "tax_status_id"});
  order_details.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(order_details, { as: "order_details", foreignKey: "product_id"});
  transactions.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(transactions, { as: "transactions", foreignKey: "product_id"});
  transactions.belongsTo(purchase_orders, { as: "purchase_order", foreignKey: "purchase_order_id"});
  purchase_orders.hasMany(transactions, { as: "transactions", foreignKey: "purchase_order_id"});
  orders.belongsTo(shippers, { as: "shipper", foreignKey: "shipper_id"});
  shippers.hasMany(orders, { as: "orders", foreignKey: "shipper_id"});

  return {
    SequelizeMeta,
    customers,
    order_details,
    orders,
    products,
    transactions,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
