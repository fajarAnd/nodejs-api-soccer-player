/* global describe it */
const supertest = require('supertest');
const { assert } = require('chai');
const app = require('../../app/server');

const server = supertest(app);

describe('Player Integration Test / Endpoint', () => {
  describe('GET /v1/player', () => {
    it('should be return player data', async () => {
      try {
        const result = await server
          .get('/v1/player')
          .expect('Content-type', /json/);

        assert.isArray(result.body.data.rows);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });

  describe('POST /v1/player', () => {
    it('should be Success create Player', async () => {
      try {
        const payload = {
          positionCode: 'GK',
          fullName: 'Bufon',
          dob: '1980-12-19',
          nationality: 'Italy',
          height: 187,
          weight: 78,
        };
        const result = await server
          .post('/v1/player')
          .send(payload)
          .expect('Content-type', /json/);

        assert.isDefined(result.body.data.playerId);
      } catch (e) {
        assert.ifError(e);
      }
    });
  });
});
