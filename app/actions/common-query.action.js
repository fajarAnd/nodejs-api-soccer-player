const R = require('ramda');

const paginateQuery = R.applySpec({
  limit: R.prop('limit'),
  offset: R.prop('offset'),
  raw: R.T,
});

module.exports = {
  paginateQuery,
};
