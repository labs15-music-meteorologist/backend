const express = require('express');
const router = express.Router();

const Users = require('./user-model.js');
const ValidateMiddleware = require('../middlewares/validate-middleware.js');

/* GET ALL USERS */
router.get('/', (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json({ users: users });
    })
    .catch(error => {
      res.status(500).json({
        error:
          'An error occurred during fetching all users. That one is on us!',
      });
    });
});

/* GET A USER BY ID */
router.get('/:id', ValidateMiddleware.validateUserId, async (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const user = await Users.findById(id);

    res.status(200).json({
      id: user.id,
      email: user.email,
      spotify_user_id: user.spotify_user_id,
      user_spotify_api_key: user.user_spotify_api_key,
      date_of_birth: user.date_of_birth,
      spotify_product_type: user.spotify_product_type,
      display_name: user.display_name,
      country: user.country,
      profile_image_url: user.profile_image_url,
    });
  } catch (error) {
    const {
      user: { id },
    } = req;

    res.status(500).json({
      error: `An error occurred during fetching an user with the id ${id}.`,
    });
  }
});

/* GET A USER BY Spofity ID */
router.get('/spotify/:id', async (req, res) => {
  try {
    const {
      params: { id },
    } = req;
    const user = await Users.findBySpotifyId(id);
    user
      ? res.status(200).json({
          id: user.id,
          email: user.email,
          spotify_user_id: user.spotify_user_id,
          user_spotify_api_key: user.user_spotify_api_key,
          date_of_birth: user.date_of_birth,
          spotify_product_type: user.spotify_product_type,
          display_name: user.display_name,
          country: user.country,
          profile_image_url: user.profile_image_url,
          spotify_playlist_id: user.spotify_playlist_id,
        })
      : res.status(404).json({
          info: `The user with the spotify_id ${id} was not found.`,
        });
  } catch (error) {
    const {
      user: { id },
    } = req;

    res.status(500).json({
      error:
        `An error occurred during fetching an user with the id ${id}.` + error,
    });
  }
});

/* ADD A NEW USER */
router.post('/register', ValidateMiddleware.validateUser, (req, res) => {
  let {
    email,
    spotify_user_id,
    user_spotify_api_key,
    date_of_birth,
    spotify_product_type,
    display_name,
    country,
    profile_image_url,
  } = req.body;

  if (
    email &&
    spotify_user_id &&
    user_spotify_api_key &&
    date_of_birth &&
    spotify_product_type &&
    display_name &&
    country
  ) {
    Users.add({
      email,
      spotify_user_id,
      user_spotify_api_key,
      date_of_birth,
      spotify_product_type,
      display_name,
      country,
      profile_image_url,
    })
      .then(newUser => {
        res.status(201).json({
          id: newUser.id,
          email: newUser.email,
          spotify_user_id: newUser.spotify_user_id,
          user_spotify_api_key: newUser.user_spotify_api_key,
          date_of_birth: newUser.date_of_birth,
          spotify_product_type: newUser.spotify_product_type,
          display_name: newUser.display_name,
          country: newUser.country,
          profile_image_url: newUser.profile_image_url,
        });
      })
      .catch(error => {
        res.status(500).json({
          error: 'An error occurred during the creation of a new user.',
        });
      });
  } else {
    res.status(400).json({
      warning: 'Not all information were provided to create a new user.',
    });
  }
});

/* LOGIN A USER */

/* DELETE A USER */
router.delete('/:id', ValidateMiddleware.validateUserId, async (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const deleteUser = await Users.remove(id);

    res.status(200).json({
      message: `The user with the id of ${id} was successfully deleted.`,
    });
  } catch (error) {
    const {
      user: { id },
    } = req;

    res.status(500).json({
      message: `The user with the id of ${id} could not be deleted.`,
    });
  }
});

/* UPDATE A USER */
router.put(
  '/:id',
  ValidateMiddleware.validateUser,
  ValidateMiddleware.validateUserId,
  async (req, res) => {
    try {
      const {
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
        user: { id },
      } = req;

      const successFlag = await Users.update(id, {
        email,
        spotify_user_id,
        user_spotify_api_key,
        date_of_birth,
        spotify_product_type,
        display_name,
        country,
        profile_image_url,
      });
      return successFlag > 0
        ? res.status(200).json({
            message: `The user with the id ${id} has been successfully updated!`,
          })
        : res.status(500).json({
            error: `An error occurred within the database thus the user with the id ${id} could not be updated.`,
          });
    } catch (error) {
      const {
        user: { id },
      } = req;

      res.status(500).json({
        error: `An error occurred during updating the user with the id ${id}.`,
      });
    }
  },
);

/* // GET ALL TASTE_PROFILE OF A USER BY USER ID
router.get(
  '/:id/taste_profiles',
  ValidateMiddleware.validateUserId,
  async (req, res) => {
    const {
      user: { id },
    } = req;

    try {
      const userTasteProfiles = await Users.findTasteProfiles(id);
      if (userTasteProfiles && userTasteProfiles.length) {
        res.status(200).json(userTasteProfiles);
      } else {
        res.status(404).json({
          info: `No taste_profiles are available for the user with the id ${id}.`,
        });
      }
    } catch (error) {
      const {
        user: { id },
      } = req;

      res.status(500).json({
        error:
          `An error occurred retrieving the taste_profiles for the user with the id ${id}. ` +
          error,
      });
    }
  },
); */

module.exports = router;
