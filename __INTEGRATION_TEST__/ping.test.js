/* global describe it */
const supertest = require('supertest');
const { assert } = require('chai');
const app = require('../app/server');

const server = supertest(app);

describe('Ping', () => {
  it('Should Return 200', (done) => {
    server
      .get('/ping')
      .expect('Content-type', /json/)
      .expect(200)
      .end((err, resp) => {
        if (err) {
          return done(err);
        }
        assert.equal(resp.body.status, 200);
        return done();
      });
  });
});
