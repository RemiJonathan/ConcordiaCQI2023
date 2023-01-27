const express = require('express');
const router = express.Router();
require('dotenv').config();

const User = require('../models/user');
const Task = require('../models/task');
const {HttpStatusCode} = require("axios");

//const mongoose = require('mongoose');

// Get all users
router.get('/', (req, res) => {
    User.find({}, (err, users) => {
        if (err) return res.status(500).send(err);
        res.status(200).json(users);
    });
});

// Get a single user
router.get('/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) return res.status(404).send('User not found');
        res.status(200).json(user);
    });
});

// Create a new user
router.post('/', (req, res) => {
    const newUser = new User(req.body);
    newUser.save((err, savedUser) => {
        if (err) return res.status(HttpStatusCode.InternalServerError).send(err);
        res.status(201).json(savedUser);
    });
});

// Update a user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) return res.status(HttpStatusCode.InternalServerError).send(err);
        if (!updatedUser) return res.status(HttpStatusCode.NotFound).send('User not found');
        res.status(200).json(updatedUser);
    });
});

// Delete a user
router.delete('/:id', (req, res) => {
    User.findOneAndDelete({_id: req.params.id}, (err, user) => {
        if (err) return res.status(500).json({error: err});
        if (!user) return res.status(404).json({error: 'User not found'});
        res.status(HttpStatusCode.Gone)
    });
});

router.get('/users/:id/tasks', (req, res) => {
    // Get the user ID from the URL
    const userId = req.params.id;

    // Retrieve the tasks for the user from the database
    Task.find({userId: userId}, (err, tasks) => {
        if (err) return res.status(500).json({message: 'Error retrieving tasks for user'});
        res.status(200).json(tasks);
    });
})

router.post('/users/:id/tasks', (req, res) => {
    // Get the user ID from the URL
    const userId = req.params.id;

    // Create a new task object with the user ID and task details from the request body
    const task = new Task({
        userId: userId,
        name: req.body.name,
        description: req.body.description,
        date: req.body.date,
        startTime: req.body.startTime,
        endTime: req.body.endTime
    });

    // Save the task to the database
    task.save((err) => {
        if (err) return res.status(500).json({message: 'Error creating task for user'});
        res.status(201).json({message: 'Task created successfully'});
    });
});

router.put('/users/:id/tasks/:taskId', (req, res) => {
    // Get the user ID and task ID from the URL
    const userId = req.params.id;
    const taskId = req.params.taskId;

    // Find the task by user ID and task ID and update it with the details from the request body
    Task.findOneAndUpdate({userId: userId, _id: taskId}, req.body, {new: true}, (err, task) => {
        if (err) return res.status(500).json({message: 'Error updating task for user'});
        if (!task) return res.status(404).json({message: 'Task not found for user'});
        res.status(200).json({message: 'Task updated successfully'});
    });
});

router.delete('/users/:id/tasks/:taskId', (req, res) => {
    // Get the user ID and task ID from the URL
    const userId = req.params.id;
    const taskId = req.params.taskId;

    // Find the task by user ID and task ID and delete it from the database
    Task.findOneAndDelete({userId: userId, _id: taskId}, (err, task) => {
        if (err) return res.status(500).json({message: 'Error deleting task for user'});
        if (!task) return res.status(404).json({message: 'Task not found for user'});
        res.status(200).json({message: 'Task deleted successfully'});
    });
});


module.exports = router;
