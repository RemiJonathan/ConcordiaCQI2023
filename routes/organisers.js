const express = require('express');
const router = express.Router();
require('dotenv').config();

//const mongoose = require('mongoose');

// Get all organisers
router.get('/', (req, res) => {
    // Code to get all organisers from the database
    res.json(organisers);
});

// Get a single organiser
router.get('/:id', (req, res) => {
    // Code to get a single organiser from the database
    res.json(organiser);
});

// Create a new organiser
router.post('/', (req, res) => {
    // Code to create a new organiser in the database
    res.json({message: 'Organiser created successfully'});
});

// Update a organiser
router.put('/:id', (req, res) => {
    // Code to update a organiser in the database
    res.json({message: 'Organiser updated successfully'});
});

// Delete a organiser
router.delete('/:id', (req, res) => {
    // Code to delete a organiser from the database
    res.json({message: 'Organiser deleted successfully'});
});


module.exports = router;
