const request = require('supertest');
const app = require('../app');
test('should return user list', async () => {
  const response = await request(app).get('/api/users');
  expect(response.statusCode).toBe(200);
});
