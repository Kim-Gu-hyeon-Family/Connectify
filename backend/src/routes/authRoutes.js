const express = require('express');
const { register, login, authenticate } = require('../controllers/authController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/signup', register);
router.post('/signin', login);
router.get('/authenticate', authenticateToken, authenticate);

module.exports = router;