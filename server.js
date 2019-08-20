const express = require('express');
const helmet = require('helmet');
const moment = require('moment');
const cors = require('cors');

const UsersRouter = require('./api/users/user-router.js');
const server = express();

server.use(Requestlogger);
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

server.use('/api/users', UsersRouter);

// Custom logging middleware for incoming requests
function Requestlogger(req, res, next) {
  console.log(
    `${req.method} to http://localhost/5000${req.path} at `,
    moment().format(),
  );
  next();
}

module.exports = server;
