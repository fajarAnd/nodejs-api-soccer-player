/* global describe it beforeEach afterEach */
const { assert } = require('chai');
const sinon = require('sinon');

const { player } = require('../../app/db/models/mysql');

const playerAction = require('../../app/actions/player.action');
const getDetailPlayerMock = require('../data-mock/api-enlist-player/get-detail-player');

describe('Unit Test Player Action', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });
  describe('Get Detail Player', () => {
    it('should be return player data', async () => {
      try {
        const playerId = 1;
        const stub = sandbox.stub(player, 'findByPk');
        stub.withArgs(getDetailPlayerMock.payload.playerId, { raw: true })
          .resolves(getDetailPlayerMock.responseSuccess);
        const result = await playerAction.getDetailPlayer(playerId);
        assert.deepEqual(getDetailPlayerMock.responseSuccess, result);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });

  describe('Update Player', () => {
    it('Update Player team', async () => {
      try {
        const payload = {
          playerId: 1,
          teamId: 1,
        };
        const stub = sandbox.stub(player, 'update');
        const successUpdated = [1];

        stub.withArgs({ teamId: payload.teamId }, { where: { playerId: payload.playerId } })
          .resolves(successUpdated);
        const result = await playerAction.updatePlayerByPk(payload);
        assert.equal(successUpdated, result);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });
});
