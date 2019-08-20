const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

const UsersRouter = require('./api/users/user-router.js');
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

server.use('/v1/users', UsersRouter);

module.exports = server;
