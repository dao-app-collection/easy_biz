const path = require('path');
const express = require('express');
const db = require('../models/index');

const router = express.Router();

router.get('/clients', async (req, res, next) => {
    const clients = await db.Client.findAll();
    console.log(clients);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(clients));
});

router.get('/client/:id', async (req, res, next) => {
    const clientId = req.params.id;
    const client = await db.Project.findAll( {
        where: {
            Id: clientId
        }
    })[0];
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(client));
});

router.post('/add-client', async (req, res, next) => {
    db.Client
        .create({
            // TODO add logic for creating CLIENT, catching posted json
        })
        .then(
            result => res.redirect(`/client/${result.dataValues.id}`)
        )
        .catch()
})

module.exports = router;