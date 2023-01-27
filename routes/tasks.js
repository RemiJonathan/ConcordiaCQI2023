const express = require('express');
const router = express.Router();
require('dotenv').config();

//const mongoose = require('mongoose');

// Get all tasks
router.get('/', (req, res) => {
    // Code to get all tasks from the database
    res.json(tasks);
});

// Get a single task
router.get('/:id', (req, res) => {
    // Code to get a single task from the database
    res.json(task);
});

// Create a new task
router.post('/', (req, res) => {
    // Code to create a new task in the database
    res.json({message: 'Task created successfully'});
});

// Update a task
router.put('/:id', (req, res) => {
    // Code to update a task in the database
    res.json({message: 'Task updated successfully'});
});

// Delete a task
router.delete('/:id', (req, res) => {
    // Code to delete a task from the database
    res.json({message: 'Task deleted successfully'});
});


module.exports = router;
