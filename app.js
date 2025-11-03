require('dotenv').config();

const mongoose = require('mongoose');
const connectDB = require('./config/db');
const serverRoutes = require('./routes/server');
const express = require('express');
const cors = require('cors');
const path = require('path');   

connectDB();
var app = express();

app.use(cors(
    {
        origin: ['http://localhost:5174, http://localhost:3000'],
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

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static('dist',{
    maxAge: '0',
    etag: false
}) );
app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


module.exports = app;


