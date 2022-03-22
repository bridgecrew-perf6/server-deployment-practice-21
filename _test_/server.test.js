'use strict';

const supertest = require ('supertest');
const app = require('../server/app.js');
const request = supertest(app);

describe('Testing our HTTP API', () =>{
  it('Respond with status 200 to GET request at /hello route', async () => {
    const response = await request.get('/hello');

    expect(response.status).toEqual(200);
  });
});
