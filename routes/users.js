const express = require('express');
const router = express.Router();
require('dotenv').config();

//const mongoose = require('mongoose');

// Get all users
router.get('/', (req, res) => {
    // Code to get all users from the database
    res.json(users);
});

// Get a single user
router.get('/:id', (req, res) => {
    // Code to get a single user from the database
    res.json(user);
});

// Create a new user
router.post('/', (req, res) => {
    // Code to create a new user in the database
    res.json({message: 'User created successfully'});
});

// Update a user
router.put('/:id', (req, res) => {
    // Code to update a user in the database
    res.json({message: 'User updated successfully'});
});

// Delete a user
router.delete('/:id', (req, res) => {
    // Code to delete a user from the database
    res.json({message: 'User deleted successfully'});
});


module.exports = router;
