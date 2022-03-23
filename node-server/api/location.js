const express = require('express');
const Location = require('../model/location.model')
const router = express.Router();

// GET Route:
router.route('/').get(async (req, res) => {
    try {
        const location = await Location.find();
        res.json(location);
    } catch(e){
        res.status(400).json("Error: " + e);
    }
  })

  module.exports = router