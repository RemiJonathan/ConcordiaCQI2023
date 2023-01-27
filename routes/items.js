const express = require('express');
const router = express.Router();
require('dotenv').config();

//const mongoose = require('mongoose');

// Get all items
router.get('/', (req, res) => {
    // Code to get all items from the database
    res.json(items);
});

// Get a single item
router.get('/:id', (req, res) => {
    // Code to get a single item from the database
    res.json(item);
});

// Create a new item
router.post('/', (req, res) => {
    // Code to create a new item in the database
    res.json({message: 'Item created successfully'});
});

// Update an item
router.put('/:id', (req, res) => {
    // Code to update an item in the database
    res.json({message: 'Item updated successfully'});
});

// Delete an item
router.delete('/:id', (req, res) => {
    // Code to delete an item from the database
    res.json({message: 'Item deleted successfully'});
});


module.exports = router;
