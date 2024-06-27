const express = require('express');
const {login,registerAdmin,sendEmail, signUp,resetPassword} = require('../controllers/authController')


//as User
const router = express.Router();
router.post('/login', login);
router.post('/signup', signUp);
//as Admin
router.post('/register-admin', registerAdmin);

//send reset email

router.post('/send-email',sendEmail)

//Reset Password
router.post("/resetPassword", resetPassword);

module.exports = router;