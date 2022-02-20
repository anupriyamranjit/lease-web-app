const express = require('express');
const Location = require('../model/location.model')
const router = express.Router();

// GET Route: All Locations
router.route('/').get(async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const location = await Location.find()
        .limit(limit)
        .skip((page-1) * limit)
        .exec()
        res.json(location);
    } catch(e){
        res.status(400).json("Error: " + e);
    }
  })


  router.route('/:id').get(async (req, res) => {
      const { id } = req.params
    try {
        const location = await Location.findById(id);
        res.json(location);
    } catch(e){
        res.status(404).json("Error: " + e);
    }
  })

  module.exports = router