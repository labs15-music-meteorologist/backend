require('dotenv').config();

module.exports = {
  getDBEnvironmentPath,
};

function getDBEnvironmentPath(db_env) {
  let PATH = '';

  // Switch case not working with String comparism - would be cleaner
  // Maybe new environment variable with the hardcoded URL
  /* switch (process.env.DB_ENV) {
    case 'deployedDevelopment':
        PATH = 'https://music-meteorology-development.herokuapp.com/';
    case 'staging1':
        PATH = 'https://music-meteorology-staging1.herokuapp.com/';
    case 'staging2':
        PATH = 'https://music-meteorology-staging2.herokuapp.com/';
    default:
        PATH = 'localhost';
    } */

  if (process.env.DB_ENV === 'deployedDevelopment') {
    PATH = 'https://music-meteorology-development.herokuapp.com/';
  } else if (process.env.DB_ENV === 'staging1') {
    PATH = 'https://music-meteorology-staging1.herokuapp.com/';
  } else if (process.env.DB_ENV === 'staging2') {
    PATH = 'https://music-meteorology-staging2.herokuapp.com/';
  } else {
    PATH = 'localhost';
  }

  return PATH;
}
