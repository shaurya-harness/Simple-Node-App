// test/add.test.js
const request = require('supertest');
const app = require('../src/add');

describe('POST /add', () => {
  it('should add two numbers', async () => {
    const response = await request(app)
      .post('/add')
      .send({ num1: 2, num2: 3 });
    expect(response.body.result).toBe(5);
  });
});