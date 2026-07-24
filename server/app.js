const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoute = require('./routes/contact');

const app = express();

// Use CORS with origin from .env
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

app.use('/api/contact', contactRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
