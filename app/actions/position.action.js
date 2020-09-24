const { position } = require('../db/models/mysql');

const getAllPosition = () => position.findAndCountAll();
module.exports = {
  getAllPosition,
};
