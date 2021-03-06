/* global describe it */
const supertest = require('supertest');
const { assert } = require('chai');
const app = require('../../app/server');

const server = supertest(app);

describe('Team Integration Test / Endpoint', () => {
  describe('GET /v1/team', () => {
    it('should be return team data', async () => {
      try {
        const result = await server
          .get('/v1/team')
          .expect('Content-type', /json/);

        assert.isArray(result.body.data.rows);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });

  describe('POST /v1/team', () => {
    it('should be Success Create Team', async () => {
      try {
        const payload = {
          name: 'liverpool',
          description: 'Series A',
        };
        const result = await server
          .post('/v1/team')
          .send(payload)
          .expect('Content-type', /json/);

        assert.isDefined(result.body.data);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });

  describe('POST /v1/team/enlist/player', () => {
    it('UnAvailable position when Adding player into team', async () => {
      try {
        const payload = {
          playerId: '1',
          playerType: 'main',
          teamId: '1',
        };
        const result = await server
          .post('/v1/team/enlist/player')
          .send(payload)
          .expect('Content-type', /json/);

        assert.equal('Unavailable GK Position in this team', result.body.errors.message);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });

  describe('GET /v1/team/:teamId', () => {
    it('Return Team including player', async () => {
      try {
        const teamId = 1;
        const result = await server
          .get(`/v1/team/${teamId}`)
          .expect('Content-type', /json/);

        assert.isDefined(result.body.data);
        assert.isDefined(result.body.data.players);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });
});
