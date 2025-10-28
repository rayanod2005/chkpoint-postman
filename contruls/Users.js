
const mongoose = require('mongoose');
const User = require('../models/User');

async function liste(req, res) {
    console.log("hello");
    const { id, name, email, password } = req.body;
    try {
        console.log(req.body);
        const user = await User.create({ id, name, email, password });
        console.log(user);
        res.status(201).json(user);
    } catch (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function listAllUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function EditUserById(req, res) {
    const userId = req.params.id;
    const { name, email, password } = req.body;
    try {
        const user = await User.findByIdAndUpdate(
            userId,
            { name, email, password },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
async function DeleteUserById(req, res) {
    const userId = req.params.id;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = { liste, listAllUsers,EditUserById,DeleteUserById };