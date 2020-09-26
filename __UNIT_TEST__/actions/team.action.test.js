/* global describe it beforeEach afterEach */
const { assert } = require('chai');
const sinon = require('sinon');

const { teamSlot } = require('../../app/db/models/mysql');

const teamAction = require('../../app/actions/team.action');
const getTeamSlotMock = require('../data-mock/api-enlist-player/get-team-slot');

describe('Unit Test Team Action', () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sandbox.restore();
  });
  describe('Get Team Slot', () => {
    it('should be return Team slot data', async () => {
      try {
        const payload = {
          teamId: getTeamSlotMock.payload.where.teamId,
          positionCode: getTeamSlotMock.payload.where.positionCode,
          playerType: getTeamSlotMock.payload.where.playerType,
        };

        const stub = sandbox.stub(teamSlot, 'findOne');
        stub.withArgs(getTeamSlotMock.payload)
          .resolves(getTeamSlotMock.responseSuccess);

        const result = await teamAction.getTeamSlot(payload);
        assert.deepEqual(getTeamSlotMock.responseSuccess, result);
      } catch (e) {
        assert.ifError(e);
      }
    });

    it('query not match, return undefined', async () => {
      try {
        const payload = {
          teamId: 9999,
          positionCode: 'GK',
          playerType: 'main',
        };

        const stub = sandbox.stub(teamSlot, 'findOne');
        stub.withArgs(getTeamSlotMock.payload)
          .resolves(getTeamSlotMock.responseSuccess);

        const result = await teamAction.getTeamSlot(payload);
        assert.isUndefined(result);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });
});
