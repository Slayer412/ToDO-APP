import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Task from '../models/taskModel.js'
import { getTasks, createTasks, removeTasks} from '../controller/taskController.js'
import { protect } from '../middleware/authMiddleware.js'


router.route('/').get(protect ,getTasks).post(protect ,createTasks)
router.route('/:id').delete(protect, removeTasks)

export default router