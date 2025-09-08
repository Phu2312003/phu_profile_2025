require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./src/routes/userRoutes');
const app = express();
app.use(express.json());
app.use('/api', userRoutes);
connectDB().then(() => {
  app.listen(process.env.PORT || 3000, () => console.log('Server running'));
});
