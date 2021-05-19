'use strict'

const express = require('express')
const morgan = require('morgan')
const _ = require("underscore");

const app = express();

// Settings
const port = process.env.port || 8080;
app.set('json spaces', 2);

// Middleware
app.use(morgan ('dev'));
app.use(express.urlencoded({ extended : false }));
app.use(express.json());

// Routes
app.use('/api/repoList', require( './routes/repositoryRouter'));

//Server Start
app.listen(port, () =>{
    console.log(`Running on http://localhost:${port}`);
});
