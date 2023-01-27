const express = require('express');
const router = express.Router();
require('dotenv').config();

//const mongoose = require('mongoose');

// Get all issues
router.get('/', (req, res) => {
    // Code to get all issues from the database
    res.json(issues);
});

// Get a single issue
router.get('/:id', (req, res) => {
    // Code to get a single issue from the database
    res.json(issue);
});

// Create a new issue
router.post('/', (req, res) => {
    // Code to create a new issue in the database
    res.json({message: 'Issue created successfully'});
});

// Update an issue
router.put('/:id', (req, res) => {
    // Code to update an issue in the database
    res.json({message: 'Issue updated successfully'});
});

// Delete an issue
router.delete('/:id', (req, res) => {
    // Code to delete an issue from the database
    res.json({message: 'Issue deleted successfully'});
});


module.exports = router;
