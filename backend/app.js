const express = require('express');
const cors = require('cors');

const db = require('./models/index');

const app = express();

const corsOptions = {
    origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

const projectRoutes = require('./routes/projects');
const deadlineRoutes = require('./routes/deadlines');
const clientRoutes = require('./routes/client');
app.use(projectRoutes);
app.use(deadlineRoutes);
app.use(clientRoutes);

app.get('/addUser', async (req, res, next) => {
db.User
    .create({ firstName: "Sam", lastName: "Wagner", email: "test"})
    .then( result => {
        console.log(result);
        res.redirect('/');
    })
    .catch( err => {
        console.log(err);
    });    
});

app.get('/', async (req, res, next) => {
    const deadlines = await db.Deadline.findAll({limit: 10});
    const clients = await db.Client.findAll();
    const projects = await db.Project.findAll();
    const data = {
        deadlines: deadlines,
        clients: clients,
        projects: projects
    }
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(data));
});

app.listen(9999, () => console.log("Listening!"));

