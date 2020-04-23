'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    user_id: DataTypes.STRING,
    status: DataTypes.STRING,
    image: DataTypes.STRING,
    name: DataTypes.STRING,
    condition: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    stock_product: DataTypes.STRING,
    weight: DataTypes.STRING,
    category: DataTypes.STRING,
    rating: DataTypes.STRING,
    seller_id: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
    product.belongsTo(models.seller, {
      foreignKey: "seller_id",
      as: "seller",
      sourceKey: "id"
    }),
    product.belongsTo(models.user_id, {
      foreignKey: "user_id",
      as: "users",
      sourceKey: "id"
    });
  };
  return product;
};