require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const serverRoutes = require('./routes/server');
const express = require('express');


connectDB();
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', function(req, res, next)  {
    console.log('Middleware executed');
    next();
},serverRoutes);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

module.exports = app;


