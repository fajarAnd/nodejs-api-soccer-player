/* global Helpers */

const teamController = require('../../controllers/team.controller');

const createTeamPayloadChecker = async (req, res, next) => {
  try {
    req.checkBody('name').not().isEmpty().withMessage('name is required')
      .trim()
      .escape();

    const errors = req.validationErrors();
    if (errors) Helpers.error(res, errors);

    return next();
  } catch (error) {
    return Helpers.error(res, error);
  }
};

const enlistPlayerIntoTeamPayloadChecker = async (req, res, next) => {
  try {
    req.checkBody('playerId').not().isEmpty().withMessage('playerId is required')
      .trim()
      .escape();
    req.checkBody('playerType').not().isEmpty().withMessage('playerType is required')
      .trim()
      .escape();
    req.checkBody('teamId').not().isEmpty().withMessage('playerType is required')
      .trim()
      .escape();

    const errors = req.validationErrors();
    if (errors) Helpers.error(res, errors);

    return next();
  } catch (error) {
    return Helpers.error(res, error);
  }
};

module.exports = (router) => {
  router.get('/', teamController.getAllTeam);
  router.post('/', createTeamPayloadChecker, teamController.createTeam);
  router.post('/enlist/player', enlistPlayerIntoTeamPayloadChecker, teamController.enlistPlayerIntoTeam);
};
