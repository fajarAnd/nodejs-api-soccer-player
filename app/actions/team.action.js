const R = require('ramda');
const { team } = require('../db/models/mysql');
const { paginate } = require('./common-query.action');

const getAllTeam = R.pipe(
  paginate,
  query => team.findAndCountAll(query),
);

const createTeam = R.pipe(
  R.applySpec({
    name: R.prop('name'),
    description: R.path(['description']),
  }),
  payload => team.create(payload),
);
module.exports = {
  getAllTeam,
  createTeam,
};
