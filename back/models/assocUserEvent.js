const mongoose = require('mongoose');

const assocUserEventSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Event'
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

const assocUserEvent = mongoose.model('assocUserEvent', assocUserEventSchema);
module.exports = assocUserEvent;