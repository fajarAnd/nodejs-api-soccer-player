const R = require('ramda');
const { position } = require('../db/models/mysql');
const { paging } = require('../helpers/common');

const paginateQuery = R.applySpec({
  limit: R.prop('limit'),
  offset: R.prop('offset'),
  raw: R.T,
});
const getAllPosition = R.pipe(
  paging,
  paginateQuery,
  query => position.findAndCountAll(query),
);
module.exports = {
  getAllPosition,
};
