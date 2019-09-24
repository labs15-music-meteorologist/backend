const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');

require('dotenv').config();

const UsersRouter = require('./api/users/user-router.js');
const RecommenderRouter = require('./api/recommendations/recommendation.js');

const server = express();
const Sentry = require('@sentry/node');

Sentry.init({
  dsn: 'https://d1fc669b08fb4d33b336f1b64a48ae5b@sentry.io/1537793',
});

server.use(Sentry.Handlers.requestHandler());
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(cors());

server.get('/', function rootHandler(req, res) {
  res.send(
    `Welcome to the ${process.env.DEPLOYMENT} environment API of Music Meteorologist!`,
  );
});

server.get('/debug-sentry', function mainHandler(req, res) {
  throw new Error('My first Sentry error!');
});

server.use(Sentry.Handlers.errorHandler());

server.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + '\n');
});

server.use('/v1/users', UsersRouter);
server.use('/v1/recommender', RecommenderRouter);

module.exports = server;
