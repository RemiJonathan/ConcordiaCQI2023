const express = require('express');
const router = express.Router();
require('dotenv').config();

//const mongoose = require('mongoose');

// Get all objects
router.get('/', (req, res) => {
    // Code to get all objects from the database
    res.json(objects);
});

// Get a single object
router.get('/:id', (req, res) => {
    // Code to get a single object from the database
    res.json(object);
});

// Create a new object
router.post('/', (req, res) => {
    // Code to create a new object in the database
    res.json({message: 'Object created successfully'});
});

// Update an object
router.put('/:id', (req, res) => {
    // Code to update an object in the database
    res.json({message: 'Object updated successfully'});
});

// Delete an object
router.delete('/:id', (req, res) => {
    // Code to delete an object from the database
    res.json({message: 'Object deleted successfully'});
});


module.exports = router;
