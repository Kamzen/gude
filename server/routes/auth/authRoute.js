
const express = require('express')

const router = express.Router()

/*
    Import Middlewares
 */

const signUpUserController = require('../../controllers/authController/signUpUserController')

/*
    Register User Routes
 */

router.post('/signup', signUpUserController)


module.exports = router

