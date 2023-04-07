const R = require('ramda');
const { position } = require('../db/models/mysql');
const { paginate } = require('./common-query.action');

const getAllPosition = R.pipe(
  paginate,
  (query) => position.findAndCountAll(query),
);
module.exports = {
  getAllPosition,
};
