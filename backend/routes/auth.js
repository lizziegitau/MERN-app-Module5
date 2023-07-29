const express = require('express')
const router = express.Router()
const authController = require('../controllers/authController')

//Route for the login
router.route('/')
    .post(authController.login)

//Route for the refresh
router.route('/refresh')
    .get(authController.refresh)

//Route for logout
router.route('/logout')
    .post(authController.logout)

module.exports = router