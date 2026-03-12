const express = require('express');
const { dashboardStats } = require('../controllers/dashboardController');
const { authenticate, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.get('/', authenticate, requireAdmin, dashboardStats);

module.exports = router;
