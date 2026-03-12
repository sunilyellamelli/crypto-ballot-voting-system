const express = require('express');
const { addVoter, listVoters, approveVoter, toggleVoterStatus } = require('../controllers/votersController');
const { authenticate, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, requireAdmin, addVoter);
router.get('/', authenticate, requireAdmin, listVoters);
router.patch('/:id/approve', authenticate, requireAdmin, approveVoter);
router.patch('/:id/toggle-status', authenticate, requireAdmin, toggleVoterStatus);

module.exports = router;
