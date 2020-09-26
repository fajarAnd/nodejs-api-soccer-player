/* global describe it */
const supertest = require('supertest');
const { assert } = require('chai');
const app = require('../../app/server');

const server = supertest(app);

describe('Position Integration Test / Endpoint', () => {
  it('should be return position data', async () => {
    try {
      const TOTAL_DATA = 11;
      const result = await server
        .get('/v1/position')
        .expect('Content-type', /json/);

      assert.isArray(result.body.data.rows);
      assert.equal(TOTAL_DATA, result.body.data.count);
    } catch (e) {
      assert.ifError(e);
    }
  });
});
