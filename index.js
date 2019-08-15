const server = require('./server.js');

const PORT = process.env.PORT || 5000;

// Todo: When DB_ENV is set so it runs on production rename PATH variable to heroku URL
const PATH = process.env.DB_ENV || 'localhost';

server.listen(PORT, () => {
  console.log(`\n *** API server running on ${PATH}:${PORT} ***\n`);
});
