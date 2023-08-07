const express = require('express');
const router = express.Router();
const examController = require('../controllers/examController');

// Create exam
router.post('/create', examController.createExam);

// Calculate results
router.post('/calculate-results', examController.calculateResults);

// Display results
router.get('/results', examController.displayResults);

module.exports = router;
