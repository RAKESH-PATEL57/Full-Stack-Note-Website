const express = require('express');
const router = require('router');
const dashboardController = require('../controllers/dashboardController');


// DashBoard Routes
router.get('/dashboard', dashboardController.dashboard);

module.exports = router;

