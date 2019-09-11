const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();
const DS_URL = process.env.DS_URL

router.post('/' , async (req,res)=> {
  let r = req.body
  let output = {}
  // TODO: add additional checks that all fields are not undefined or null
  let audioFeatures = {
    tempo:r.tempo,
    key:r.key,
    mode:r.mode,
    time_signature:r.time_signature,
    popularity:r.popularity,
    acousticness:r.acousticness,
    danceability:r.danceability,
    energy:r.energy,
    instrumentalness:r.instrumentalness,
    liveness:r.liveness,
    valence:r.valence,
  }
  try {
    // TODO: turn this into a post request and send in audioFeatures in the request body
    await axios.get(DS_URL, {
    }).then(res => {
      output = res.data
    }).catch(error => {
      console.log(error)
    })
    res.status(200).json(output)
  }
  catch (error){
    res.status(400).json(error);
  }
})

module.exports = router