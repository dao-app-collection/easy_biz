const path = require('path');
const express = require('express');
const db = require('../models/index');

const router = express.Router();


router.get('/add-project', async (req, res, next) => {
    db.Project
        .create({title: "New Project", feeStructure: "flat"})
        .then( result => {
            console.log(result);
            res.redirect(`/project/${result.dataValues.id}`);
        })
        .catch( err => {
            console.log(err);
        });
});

router.get('/delete-project/:id', async (req, res, next) => {
    const projId = req.params.id;
    db.Project
        .destroy({
            where: {
                id: projId
            }
        })
        .then(
            () => {res.send();}
        )
        .catch( err => {
            res.send( err );
        })
});

router.post('/edit-project/:id', (req, res, next) => {

});

router.get('/projects', async (req, res, next) => {
    const projects = await db.Project.findAll();
    console.log(projects);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(projects));
});

router.get('/project/:id', async (req, res, next) => {
    const projId = req.params.id;
    const project = await db.Project.findAll({
        where: {
            Id: projId
        }
    });
    console.log(project);
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(project));
});

module.exports = router;