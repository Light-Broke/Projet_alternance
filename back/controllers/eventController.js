const Event = require('../models/event');

// Create an Event
exports.createEvent = async (req, res) => {
  try {
    const { title, description, category, date, hour, position, createdBy } = req.body;
    const event = new Event({
      title,
      description,
      category,
      date,
      hour,
      position,
      createdBy, 
    });
    console.log(event);
    const savedEvent = await event.save();
    const association = new assocUserEvent({
      eventId: savedEvent._id,
      userId: createdBy,
    });
    console.log(association);
    await association.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
exports.deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    await assocUserEvent.deleteMany({ eventId: deletedEvent._id });
    res.status(200).json({ message: 'Event deleted successfully', deletedEvent });
  } 
  
  catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get events by category
exports.getEventsbyCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const events = await Event.find({ category });
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Get all events
exports.getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

// Update event
exports.updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, category } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      id,
      { title, description, category },
      { new: true, runValidators: true }
    );
    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    res.status(200).json(updatedEvent);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};