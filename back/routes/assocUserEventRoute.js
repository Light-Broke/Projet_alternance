const express = require('express');
const router = express.Router();
const assocUserEventController = require('../controllers/assocUserEventController');

router.get('/user/:userId/events', assocUserEventController.getEvents);
router.get('/event/:eventId/users', assocUserEventController.getUsers);
router.delete('/event/:eventId/user/:userId', assocUserEventController.deleteUserFromEvent);
router.post('/event/:eventId/user/:userId', assocUserEventController.addUserToEvent);

module.exports = router;
