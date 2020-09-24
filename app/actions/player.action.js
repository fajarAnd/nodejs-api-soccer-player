const R = require('ramda');
const { player } = require('../db/models/mysql');
const { paginate } = require('./common-query.action');

const getAllPlayer = R.pipe(
  paginate,
  query => player.findAndCountAll(query),
);
module.exports = {
  getAllPlayer,
};
