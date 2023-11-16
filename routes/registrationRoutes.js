const express = require('express');
const Registration = require('../models/registration');
const router = express.Router();

// Create a new registration
router.post('/', async (req, res) => {
  try {
    const registration = new Registration(req.body);
    const result = await registration.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all registrations
router.get('/', async (req, res) => {
  try {
    const registrations = await Registration.find().populate('userId').populate('eventId');
    res.send(registrations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a registration by ID
router.get('/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id).populate('userId').populate('eventId');
    if (!registration) {
      return res.status(404).send();
    }
    res.send(registration);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update a registration
router.put('/:id', async (req, res) => {
  try {
    const registration = await Registration.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!registration) {
      return res.status(404).send();
    }
    res.send(registration);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete a registration
router.delete('/:id', async (req, res) => {
  try {
    const registration = await Registration.findByIdAndDelete(req.params.id);
    if (!registration) {
      return res.status(404).send();
    }
    res.send(registration);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
