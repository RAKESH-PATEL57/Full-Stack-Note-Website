const express = require('express');
const router = express.Router('router');
const { isLoggedIn } = require('../middleware/checkAuth');
const dashboardController = require('../controllers/dashboardController');


// DashBoard Routes
// router.get('/dashboard',dashboardController.dashboard);
router.get('/dashboard', isLoggedIn, dashboardController.dashboard);

module.exports = router;

