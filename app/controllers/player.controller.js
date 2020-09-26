/* global Helpers */
const playerAction = require('../actions/player.action');
const logger = require('../libs/logger');


const getAllPlayers = async (req, res) => {
  const { requestId } = req;
  try {
    const { page = 1, limit = 11 } = req.query;
    const result = await playerAction.getAllPlayer({ page, limit });
    return Helpers.response(res, result);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch getAllPlayers',
    });
    return Helpers.error(res, error);
  }
};

const createPlayer = async (req, res) => {
  const { requestId, body } = req;
  try {
    const result = await playerAction.createPlayer(body);
    return Helpers.response(res, result);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch createPlayer',
    });
    return Helpers.error(res, error);
  }
};

module.exports = {
  getAllPlayers,
  createPlayer,
};
