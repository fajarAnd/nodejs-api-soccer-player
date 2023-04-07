const R = require('ramda');
const { player } = require('../db/models/mysql');
const { paginate } = require('./common-query.action');
const { formattingGeneralDate } = require('../helpers/date');
const { sanitizeProp } = require('../helpers/common');

const getAllPlayer = R.pipe(
  paginate,
  (query) => player.findAndCountAll(query),
);

const createPlayer = R.pipe(
  R.applySpec({
    positionCode: R.prop('positionCode'),
    fullName: R.path(['fullName']),
    dob: R.pipe(R.path(['dob']), formattingGeneralDate),
    nationality: R.path(['nationality']),
    height: R.path(['height']),
    weight: R.path(['weight']),
  }),
  (payload) => player.create(payload),
);

const getDetailPlayer = (playerId) => player.findByPk(playerId, { raw: true });

const queryUpdate = R.applySpec({
  where: {
    playerId: R.prop('playerId'),
  },
  values: {
    teamId: R.path(['teamId']),
    positionCode: R.path(['positionCode']),
    fullName: R.path(['fullName']),
    dob: R.path(['dob']),
    nationality: R.path(['nationality']),
    height: R.path(['height']),
    weight: R.path(['weight']),
  },
});
const sanitizer = R.tap(
  R.pipe(
    R.prop('values'),
    sanitizeProp,
  ),
);
const updatePlayerByPk = R.pipe(
  queryUpdate,
  sanitizer,
  (payload) => player.update(
    R.prop('values', payload),
    { where: R.path(['where'], payload) },
  ),
);

module.exports = {
  getAllPlayer,
  createPlayer,
  getDetailPlayer,
  updatePlayerByPk,
};
