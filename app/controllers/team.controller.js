/* global Helpers */
const teamAction = require('../actions/team.action');
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
  const { requestId } = req;
  try {
    const { body } = req;
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

module.exports = {
  getAllTeam,
  createTeam,
};
