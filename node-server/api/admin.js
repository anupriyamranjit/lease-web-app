const express = require('express');
const Admin = require('../model/admin.model')
const router = express.Router();

router.get('/healthcheck', async (req, res) => {
    try {
        res.status(200).json({ message: "Healthy" })

    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/users', async (req, res) => {
    const user = new Admin(req.body);
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})

    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    try {
        const user = await Admin.findByCredentials(req.body.name, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })

    } catch(e) {
        res.status(400).send(e)

    }
})

module.exports = router

