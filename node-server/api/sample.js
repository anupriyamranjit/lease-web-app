const express = require('express');
const TestModel = require('../model/test.model');
const router = express.Router();


// GET Route: Get All Tests Items
router.route('/').get(async (req, res) => {
    try {
        // await Test.create({ name: 'string', size: 'string' })
        const item = await TestModel.find();
        res.json(item);
    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})

// POST Route: Add a Test Item
router.route('/addTest').post(async (req, res) => {
    try {
        // const name = req.body.name;
        // const quantity = req.body.quantity;

        const { name, quantity } = req.body;
        let newItem = new TestModel({ name, quantity });
        await newItem.save();
        res.json(`Test item: ${name} was added`);

    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})

// GET Route: Get Single Test Item
router.route('/:id').get(async (req, res) => {
    try {
        const id = req.params.id;
        let foundItem = await TestModel.findById(id);
        res.json(foundItem);

    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})

// DELETE Route: Delete Test Item
router.route('/:id').delete(async (req, res) => {
    try {
        const id = req.params.id;
        let foundItem = await TestModel.findById(id);
        await foundItem.remove();

    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})

// PATCH Route: Update Test Item
router.route('/update/:id').patch(async (req, res) => {
    try {
        const { name, quantity } = req.body;
        const id = req.params.id;
        let foundItem = await TestModel.findById(id);
        foundItem.name = name;
        foundItem.quantity = quantity;
        await foundItem.save();

    } catch (e) {
        res.status(400).json("Error: " + e);
    }
})

module.exports = router