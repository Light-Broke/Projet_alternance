const express = require('express');
const Registration = require('../models/registration');
const Event = require('../models/event');
const User = require('../models/user');
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

// Get a registration by User ID
router.get('/byuserid', async (req, res) => {
  try {
    const { userId } = req.query;
    const registrations = await Registration.find({ userId }).populate('eventId').populate('userId');
    res.send(registrations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a registration by Event ID
router.get('/byeventid', async (req, res) => {
  try {
    const { eventId } = req.query;
    const registrations = await Registration.find({ eventId }).populate('eventId').populate('userId');
    res.send(registrations);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a registration by Event Title or User Email
router.get('/byeventtitleoruseremail', async (req, res) => {
  try {
    const { eventTitle, userEmail } = req.query;
    const event = await Event.findOne({ title: eventTitle });
    const user = await User.findOne({ email: userEmail });
    const registrations = await Registration.find({
      $or: [{ eventId: event ? event._id : null }, { userId: user ? user._id : null }]
    }).populate('eventId').populate('userId');
    res.send(registrations);
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
