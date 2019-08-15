const express = require('express');
const helmet = require('helmet');
// Interchange moment for date-fns - slimmer
const moment = require('moment');
const cors = require('cors');

// Route handler import

const server = express();

server.use(requestlogger);
server.use(express.json());
server.use(helmet());
server.use(cors());

server.get('/', (req, res) => {
  res.send(
    `Welcome to the ${
      process.env.DB_ENV
    } environment API of Music Meteorologist!`,
  );
});

// Usage for the server of route handlers

// Custom logging middleware for incoming requests
function requestlogger(req, res, next) {
  console.log(
    `${req.method} to http://localhost:5000${req.path} at `,
    moment().format(),
  );
  next();
}

module.exports = server;
