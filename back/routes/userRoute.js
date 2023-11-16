const express = require("express");
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user', userController.createUser);
router.get('/user/:id', userController.getUserbyId);
router.get('/user/:email', userController.getUserByEmail);
router.update('/user', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;