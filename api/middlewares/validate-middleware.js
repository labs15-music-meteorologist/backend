const Users = require('../users/user-model.js');

module.exports = {
  validateUserId,
  validateUser,
};

function validateUser(req, res, next) {
  const {
    body,
    body: {
      email,
      spotify_user_id,
      user_spotify_api_key,
      date_of_birth,
      spotify_product_type,
      display_name,
      country,
      profile_image_url,
    },
  } = req;

  if (!body) {
    res.status(400).json({ warning: 'Missing user data entirely.' });
  } else if (
    !email ||
    !spotify_user_id ||
    !user_spotify_api_key ||
    !date_of_birth ||
    !spotify_product_type ||
    !display_name ||
    !country
  ) {
    res.status(400).json({
      warning:
        'Missing required email or spotify_user_id or user_spotify_api_key or date_of_birth or spotify_product_type or display_name or country information for an user.',
    });
  } else {
    next();
  }
}

async function validateUserId(req, res, next) {
  try {
    const {
      params: { id },
    } = req;

    const user = await Users.findById(id);
    user
      ? ((req.user = user), next())
      : res.status(404).json({
          info: `The user with the id ${id} was not found during validation.`,
        });
  } catch (error) {
    res
      .status(500)
      .json({
        error: 'An error occurred during validation of the user. ' + error,
      });
  }
}
