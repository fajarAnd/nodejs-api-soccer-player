/* global describe it */
const supertest = require('supertest');
const { assert } = require('chai');
const app = require('../../app/server');

const server = supertest(app);

describe('Player Integration Test / Endpoint', () => {
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
