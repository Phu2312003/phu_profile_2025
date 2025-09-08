require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./src/routes/userRoutes');

const app = express();

app.use(express.json());
app.use('/api', userRoutes);

// Connect to database
connectDB();

// Export the app for Vercel serverless functions
module.exports = app;

// For local development
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}
