
const connectDB = require('../config/db');
const express = require('express');
const { liste, listAllUsers, EditUserById, DeleteUserById } = require('../contruls/Users');
const router = express.Router();

router.get('/alluser',listAllUsers);
router.post('/plus', liste);
router.put('/edit/:id',EditUserById);
router.delete('/delete/:id',DeleteUserById);
module.exports = router;
