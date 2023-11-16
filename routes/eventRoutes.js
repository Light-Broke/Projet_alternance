const express = require('express');
const Event = require('../models/event');
const router = express.Router();

// Create a new event
router.post('/', async (req, res) => {
  try {
    const event = new Event(req.body);
    const result = await event.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all events
router.get('/', async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get an event by title
router.get('/bytitle', async (req, res) => {
  try {
    const { title } = req.query;
    const event = await Event.findOne({ title });
    if (!event) {
      return res.status(404).send('Event not found');
    }
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get an event by ID
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update an event
router.put('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete an event
router.delete('/:id', async (req, res) => {
  try {
    const event = await Event.findByIdAndDelete(req.params.id);
    if (!event) {
      return res.status(404).send();
    }
    res.send(event);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Additional feature: When creating an event, link it to a user
router.post('/', async (req, res) => {
  try {
    const { userId, ...eventData } = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send('User not found');
    }
    const event = new Event({ ...eventData, createdBy: user._id });
    const result = await event.save();
    res.status(201).send(result);
  } catch (error) {
    res.status(400).send(error);
  }
});


module.exports = router;
