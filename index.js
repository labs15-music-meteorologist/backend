const server = require('./server.js');
require('dotenv').config();
const utils = require('./src/utils/environment.js');

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(
    `\n *** API server running on ${utils.getDBEnvironmentPath(
      process.env.DB_ENV,
    )}:${PORT} ***\n`,
  );
});
