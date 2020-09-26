const R = require('ramda');
const { paging } = require('../helpers/common');

const paginateQuery = R.applySpec({
  limit: R.prop('limit'),
  offset: R.prop('offset'),
  raw: R.T,
});

module.exports = {
  paginate: R.pipe(
    paging,
    paginateQuery,
  ),
};
