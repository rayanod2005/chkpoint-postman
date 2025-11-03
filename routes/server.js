
const connectDB = require('../config/db');
const express = require('express');
const { liste, listAllUsers, EditUserById, DeleteUserById, login, verifyToken } = require('../contruls/Users');
const router = express.Router();


router.get('/alluser',listAllUsers);
router.post('/plus', liste);
router.put('/edit/:id',verifyToken, EditUserById);
router.delete('/delete/:id',verifyToken, DeleteUserById);
router.post('/login',login);


    

module.exports = router;
