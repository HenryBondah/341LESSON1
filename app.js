require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./db/connect');

// Use the PORT environment variable provided by Render, or default to 8080 if not set
const port = process.env.PORT || 8080;
const app = express();

// Middleware to parse JSON request bodies
app.use(bodyParser.json());

// CORS Middleware to allow cross-origin requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Import routes
const routes = require('./routes');
app.use('/', routes);

// MongoDB initialization and server start
mongodb.initDb((err, db) => {
  if (err) {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1); // Exit if the database connection fails
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port ${port}`);
    });
  }
});

// Error handling middleware for any unhandled errors in the routing
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
