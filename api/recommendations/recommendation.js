const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

const DS_URL = process.env.DS_URL

router.post('/' , async (req,res)=> {
  const r = req.body
  let output = {}
  // TODO: add additional checks that all fields are not undefined or null
  const audioFeatures = {
    "acousticness": 0.934,
    "danceability": 0.186,
    "energy": 0.107,
    "instrumentalness": 0,
    "key": 5,
    "liveness": 0.297,
    "loudness": -14.802,
    "mode": 1,
    "speechiness": 0.0347,
    "tempo": 107.095,
    "time_signature": 4,
    "valence": 0.149
  }
  try {
    // TODO: turn this into a post request and send in audioFeatures in the request body
    // TODO: Write real error messages
    await axios.post(DS_URL,{audio_features:audioFeatures})
    .then(res => {
      output = res.data
    }).catch(error => {
      res.status(400).json(error)
    })
    res.status(200).json(output)
  }
  catch (error){
    res.status(400).json(error);
  }
})



// Mock endpoint to simulate DS endpoint
router.post('/mock',(req,res)=>{
  const r = req.body.audio_features
  const mockData = {
      "songs": [
          {
              "similarity": [
                  0.9999817191653122
              ],
              "values": "68ELfMDJjmv9xCEJ7h92JI"
          },
          {
              "similarity": [
                  0.999981179860223
              ],
              "values": "2dIoNxZw3MtSfgqC42Isj8"
          },
          {
              "similarity": [
                  0.999981134462956
              ],
              "values": "565Ucgjk9QpwcQGhPTI9ts"
          }
      ]
  }

  res.status(200).json(mockData)
})

module.exports = router

