/* global Helpers */
const R = require('ramda');
const teamAction = require('../actions/team.action');
const playerAction = require('../actions/player.action');
const logger = require('../libs/logger');


const getAllTeam = async (req, res) => {
  const { requestId } = req;
  try {
    const { page = 1, limit = 11 } = req.query;
    const result = await teamAction.getAllTeam({ page, limit });
    return Helpers.response(res, result);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch getAllTeam',
    });
    return Helpers.error(res, error);
  }
};

const createTeam = async (req, res) => {
  const { requestId, body } = req;
  try {
    const result = await teamAction.createTeam(body);
    return Helpers.response(res, result);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch createTeam',
    });
    return Helpers.error(res, error);
  }
};

const enlistPlayerIntoTeam = async (req, res) => {
  const { requestId, body } = req;
  try {
    const { playerId, playerType, teamId } = body;
    const player = await playerAction.getDetailPlayer(playerId);

    const payloadTeamSlot = pt => R.applySpec({
      teamId: R.prop('teamId'),
      positionCode: R.prop('positionCode'),
      playerType: R.always(pt),
    });
    const whenPlayerNotFound = R.ifElse(R.isNil,
      () => { throw new Error('Player Not Found'); },
      R.identity);

    const teamSlot = R.pipe(
      payloadTeamSlot(playerType),
      teamAction.getTeamSlot,
    );
    const teamSlotUnavailable = R.ifElse(R.isNil,
      R.identity,
      (pos) => { throw new Error(`Unavailable ${pos.positionCode} Position in this team`); });

    await R.pipe(
      whenPlayerNotFound,
      teamSlot,
      R.andThen(teamSlotUnavailable),
    )(player);

    const updatePlayer = await playerAction.updatePlayerByPk({ playerId, teamId });

    R.ifElse(
      R.pipe(R.head, R.equals(1)),
      R.identity,
      () => { throw new Error('Failed Update'); },
    )(updatePlayer);

    const insertTeamSlot = await R.pipe(
      R.assoc('playerType', playerType),
      R.assoc('teamId', teamId),
      teamAction.createTeamSlot,
    )(player);

    return Helpers.response(res, insertTeamSlot);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch createTeam',
    });
    return Helpers.error(res, error);
  }
};

const getTeamIncludePlayer = async (req, res) => {
  const { requestId } = req;
  try {
    const { teamId } = req.params;
    const result = await teamAction.getTeamIncludePlayer({ teamId });
    return Helpers.response(res, result);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch createTeam',
    });
    return Helpers.error(res, error);
  }
};

module.exports = {
  getAllTeam,
  createTeam,
  enlistPlayerIntoTeam,
  getTeamIncludePlayer,
};
