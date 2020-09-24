
const playerController = require('../../controllers/player.controller');

module.exports = (router) => {
  router.get('/', playerController.getAllPlayers);
};
