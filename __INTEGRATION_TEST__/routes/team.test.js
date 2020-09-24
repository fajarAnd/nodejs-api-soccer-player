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
});
