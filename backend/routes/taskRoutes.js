import express from 'express'
import asyncHandler from 'express-async-handler'
const router = express.Router()
import Task from '../models/taskModel.js'

//@desc Fetch all tasks
//@route GET /api/tasks
//@access Private
router.get('/',asyncHandler(async(req, res) => {
    const tasks = await Task.find({})
    res.json(tasks)
}))

export default router