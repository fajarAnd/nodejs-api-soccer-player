
const positionController = require('../../controllers/position.controller');

module.exports = (router) => {
  router.get('/', positionController.getAllPositions);
};
