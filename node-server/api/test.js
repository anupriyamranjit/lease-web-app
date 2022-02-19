const express = require('express');
const Test = require('../model/test.model')
const router = express.Router();

// GET Route: All Tests
router.route('/').get(async (req, res) => {
    try {
        await Test.create({name: 'string', size: 'string' })
        const test = await Test.find();
        res.json(test);
    } catch(e){
        res.status(400).json("Error: " + e);
    }
  })

  module.exports = router
