const express = require('express');
const helmet = require('helmet');
// Interchange moment for date-fns - slimmer
const moment = require('moment');
const cors = require('cors');
const morgan = require('morgan');
/* require('dotenv').config(); */
const utils = require('./src/utils/environment.js');

// Route handler import
const UsersRouter = require('./src/api/users/user-router.js');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.get('/', (req, res) => {
  res.send(
    `Welcome to the ${
      process.env.DB_ENV
    } environment API of Music Meteorologist!`,
  );
});

// Usage for the server of route handlers
server.use('/v1/users', UsersRouter);

module.exports = server;
