// Dummy authentication service
const authenticate = (username, password) => {
  // Implement actual logic here
  return username === 'admin' && password === 'password';
};
module.exports = { authenticate };
