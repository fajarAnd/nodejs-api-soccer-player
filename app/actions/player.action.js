const R = require('ramda');
const { position } = require('../db/models/mysql');
const { paging } = require('../helpers/common');
const { paginateQuery } = require('./common-query.action');

const getAllPosition = R.pipe(
  paging,
  paginateQuery,
  query => position.findAndCountAll(query),
);
module.exports = {
  getAllPosition,
};
