const express = require('express');
const { createElection, listElections, getElection, updateElection, deleteElection, addCandidate, deleteCandidate, activeElections } = require('../controllers/electionsController');
const { authenticate, authenticateOptional, requireAdmin } = require('../middleware/auth');

const router = express.Router();

router.post('/', authenticate, requireAdmin, createElection);
router.get('/', authenticate, listElections);
router.get('/active', authenticate, activeElections);
router.get('/:id', authenticate, getElection);
router.put('/:id', authenticate, requireAdmin, updateElection);
router.delete('/:id', authenticate, requireAdmin, deleteElection);
router.post('/:id/candidates', authenticate, requireAdmin, addCandidate);
router.delete('/:id/candidates/:candidateId', authenticate, requireAdmin, deleteCandidate);

module.exports = router;
