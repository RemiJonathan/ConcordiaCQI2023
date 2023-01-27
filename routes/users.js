const express = require('express');
const router = express.Router();
require('dotenv').config();

const User = require('../models/user');
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
        if (err) return res.status(500).send(err);
        res.status(201).json(savedUser);
    });
});

// Update a user
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedUser) => {
        if (err) return res.status(500).send(err);
        if (!updatedUser) return res.status(404).send('User not found');
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


module.exports = router;
