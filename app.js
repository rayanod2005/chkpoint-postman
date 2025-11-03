require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const serverRoutes = require('./routes/server');
const express = require('express');
const cors = require('cors');


connectDB();
var app = express();

app.use(cors(
    {
        origin: ['http://localhost:5174'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        optionsSuccessStatus: 200,
        credentials: true,
    }
))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', function (req, res, next) {
    console.log('Middleware executed');
    next();
}, serverRoutes);
app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});


module.exports = app;


