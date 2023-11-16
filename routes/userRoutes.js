const express = require('express');
const User = require('../models/user');
const router = express.Router();

// Create a new user
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find().select('-password');
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a user by first name and last name
router.get('/byname', async (req, res) => {
  try {
    const { firstName, lastName } = req.query;
    const user = await User.findOne({ firstName, lastName }).select('-password');
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a user by ID
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Get a user by Email
router.get('/byemail', async (req, res) => {
  try {
    const { email } = req.query;
    const user = await User.findOne({ email }).select('-password');
    if (!user) {
      return res.status(404).send('User not found');
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


// Update a user
router.put('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a user
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).send();
    }
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
