const path = require('path');
const express = require('express');
const db = require('../models/index');

const router = express.Router();

router.post('/add-deadline', async (req, res, next) => {
    db.Deadline
        .create({})
        .then( result => {
            console.log(result);
            res.redirect(`/deadline/${result.dataValues.id}`);
        })
        .catch( err => {
            console.log(err);
        });
});

router.post('/delete-deadline/:id', async (req, res, next) => {
    const deadlineId = req.params.id;
    db.Deadline
        .destroy({
            where: {
                id: deadlineId
            }
        })
        .then(
            () => {res.send();}
        )
        .catch( err => {
            res.send( err );
        });
});

module.exports = router;