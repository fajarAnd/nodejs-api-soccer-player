const R = require('ramda');
const { player } = require('../db/models/mysql');
const { paginate } = require('./common-query.action');
const { formattingGeneralDate } = require('../helpers/date');

const getAllPlayer = R.pipe(
  paginate,
  query => player.findAndCountAll(query),
);

const createPlayer = R.pipe(
  R.applySpec({
    positionCode: R.prop('positionCode'),
    fullName: R.path(['fullName']),
    dob: R.pipe(R.path(['dob']), formattingGeneralDate, R.tap(console.log)),
    nationality: R.path(['nationality']),
    height: R.path(['height']),
    weight: R.path(['weight']),
  }),
  payload => player.create(payload),
);

const getDetailPlayer = playerId => player.findByPk(playerId, { raw: true });

module.exports = {
  getAllPlayer,
  createPlayer,
  getDetailPlayer,
};
