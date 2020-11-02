const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.route('/login').post(controller.authUser);
router.route('/profile').get(protect, controller.getUserProfile);
router.route('/profile').put(protect, controller.updateUserProfile);
router.route('/').post(controller.registerUser);

module.exports = router;
