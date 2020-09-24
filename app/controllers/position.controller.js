/* global Helpers */
const positionAction = require('../actions/position.action');
const logger = require('../libs/logger');


const getAllPositions = async (req, res) => {
  const { requestId } = req;
  try {
    const { page = 1, limit = 11 } = req.query;
    const positions = await positionAction.getAllPosition({ page, limit });
    return Helpers.response(res, positions);
  } catch (error) {
    logger.error({
      requestId,
      data: error,
      description: 'Error on Catch GetAllPostiion',
    });
    return Helpers.error(res, error);
  }
};

module.exports = {
  getAllPositions,
};
