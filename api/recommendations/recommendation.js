const express = require('express');
const router = express.Router();
const axios = require('axios');

require('dotenv').config();

const DS_URL = process.env.DS_URL

router.post('/' , async (req,res)=> {
  const r = req.body.audio_features
  let output = {}
  // TODO: add additional checks that all fields are not undefined or null
  const audioFeatures = {
    "acousticness": r.acousticness,
    "danceability": r.danceability,
    "energy": r.energy,
    "instrumentalness": r.instrumentalness,
    "key": r.key,
    "liveness": r.liveness,
    "loudness": r.loudness,
    "mode": r.mode,
    "speechiness": r.speechiness,
    "tempo": r.tempo,
    "time_signature": r.time_signature,
    "valence": r.valence
  }
  const requestCompare = Object.keys(r)
  const postShape = [
    'acousticness',
    'danceability',
    'energy',
    'instrumentalness',
    'key',
    'liveness',
    'loudness',
    'mode',
    'speechiness',
    'tempo',
    'time_signature',
    'valence'
  ]
    if (JSON.stringify(requestCompare) === JSON.stringify(postShape)){
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
        res.status(400).json({error:`Bad Request ${error}`});
      }
    }else{
      res.status(400).json("Error posting audio_features, check your data shape")
    }

})



// Mock endpoint to simulate DS endpoint
router.post('/mock',(req,res)=>{
  const r = req.body.audio_features
  const mockData = {
    "songs": [
      {
        "similarity": 0.9999787324793246,
        "values": "5d4zl1SVfjPykq0yfsdil6"
      },
      {
        "similarity": 0.9999746088570707,
        "values": "32bZwIZbRYe4ImC7PJ8s2A"
      }
    ]
  }
  res.status(200).json(mockData)
})

module.exports = router

