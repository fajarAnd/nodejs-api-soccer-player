const R = require('ramda');
const { team, teamSlot } = require('../db/models/mysql');
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

const getTeamSlot = R.pipe(
  R.applySpec({
    where: {
      teamId: R.prop('teamId'),
      positionCode: R.prop('positionCode'),
      playerType: R.prop('playerType'),
    },
    raw: R.T,
  }),
  query => teamSlot.findOne(query),
);

const createTeamSlot = R.pipe(
  R.applySpec({
    teamId: R.prop('teamId'),
    positionCode: R.prop('positionCode'),
    playerType: R.prop('playerType'),
  }),
  payload => teamSlot.create(payload),
);
module.exports = {
  getAllTeam,
  createTeam,
  getTeamSlot,
  createTeamSlot,
};
