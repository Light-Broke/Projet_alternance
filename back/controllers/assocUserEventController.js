const assocUserEvent = require('../models/assocUserEvent');
const Event = require('../models/event');
const User = require('../models/user');

// Get all events using userID
exports.getEvents = async (req, res) => {
  try {
    const { userId } = req.params;
    const events = await assocUserEvent.find({ userId }).populate('eventId');
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get all users using eventID
exports.getUsers = async (req, res) => {
  try {
    const { eventId } = req.params;
    const users = await assocUserEvent.find({ eventId }).populate('userId');
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Delete a user from an event
exports.deleteUserFromEvent = async (req, res) => {
  try {
    const { eventId, userId } = req.params;
    const result = await assocUserEvent.deleteOne({ eventId, userId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'User not found in the event' });
    }
    res.status(200).json({ message: 'User deleted from the event' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Add a user to an event
exports.addUserToEvent = async (req, res) => {
  try {
    const { eventId, userId } = req.params;
    const association = new assocUserEvent({ eventId, userId });
    await association.save();
    res.status(201).json({ message: 'User added to the event' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
