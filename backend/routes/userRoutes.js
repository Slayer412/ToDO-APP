import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()

import { authUser, registerUser } from '../controller/userController.js'

router.route('/').post(registerUser)
router.post('/login',authUser)

export default router