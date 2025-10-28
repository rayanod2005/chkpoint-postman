const mongoose = require('mongoose');

const uri = process.env.MYATLS || 'mongodb://127.0.0.1:27017/test';

module.exports = async function connectDB() {
    try {
        await mongoose.connect(uri), 
        console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
        }}