const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.post('/event', eventController.createEvent);
router.delete('/event/:id', eventController.deleteEvent);
router.get('/event/:category', eventController.getEventsbyCategory);
router.get('/event', eventController.createAllEvents);
router.put('/event/:id', eventController.updateEvent);

module.exports = router;
