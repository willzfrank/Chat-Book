const router = require('express').Router();

const AuthController = require('../controllers/AuthController');

// REGISTER

router.post('/register', AuthController.Register);

// LOGIN

router.post('/login', AuthController.Login);
module.exports = router;
