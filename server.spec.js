const request = require('supertest');

const server = require('./server.js');

/* ENDPOINT TEST API RUNNING */
describe('API WELCOME MESSAGE RUNNING', () => {
  it('greets the user', () => {
    return request(server)
      .get('/')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', 'text/html; charset=utf-8');
  });
});

/* ENDPOINT GET ALL USERS */
describe('GET ALL USERS OK', () => {
  it('runs ok', () => {
    return request(server)
      .get('/v1/users/')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});

/* ENDPOINT GET A SINGLE USER */
describe('GET A SINGLE USER OK', () => {
  it('runs ok', () => {
    return request(server)
      .get('/v1/users/1')
      .set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/);
  });
});

/* VALIDATION TESTS REGISTER A USER*/
describe('REGISTER A USER NO BODY', () => {
  it('returns 400 No Body Provided', () => {
    return request(server)
      .post('/v1/users/register')
      .send({})
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '41')
      .then(res => {
        expect(res.body.warning).toBe(`Missing user data entirely.`);
      });
  });
});

describe('REGISTER A USER NO COMPLETE USER', () => {
  it('returns 400 User Data Not Complete', () => {
    return request(server)
      .post('/v1/users/register')
      .send({
        email: 'updated.user@pm.me',
        spotify_user_id: 'update',
        user_spotify_api_key: 'FromThe',
      })
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '172')
      .then(res => {
        expect(res.body.warning).toBe(
          `Missing required email or spotify_user_id or user_spotify_api_key or date_of_birth or spotify_product_type or display_name or country information for an user.`,
        );
      });
  });
});

/* VALIDATION TESTS UPDATE A USER*/
describe('UPDATE A USER NO BODY', () => {
  it('returns 400 No Body Provided', () => {
    return request(server)
      .put('/v1/users/1')
      .send({})
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '41')
      .then(res => {
        expect(res.body.warning).toBe(`Missing user data entirely.`);
      });
  });
});

describe('UPDATE A USER NO COMPLETE USER', () => {
  it('returns 400 User Data Not Complete', () => {
    return request(server)
      .put('/v1/users/1')
      .send({
        email: 'updated.user@pm.me',
        spotify_user_id: 'update',
        user_spotify_api_key: 'FromThe',
      })
      .set('Accept', 'application/json')
      .expect(400)
      .expect('Content-Type', /json/)
      .expect('Content-Length', '172')
      .then(res => {
        expect(res.body.warning).toBe(
          `Missing required email or spotify_user_id or user_spotify_api_key or date_of_birth or spotify_product_type or display_name or country information for an user.`,
        );
      });
  });
});
