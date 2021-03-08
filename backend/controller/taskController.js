import asyncHandler from 'express-async-handler'
import Task from '../models/taskModel.js'

//@desc Fetch all tasks
//@route GET /api/tasks
//@access Private
const getTasks = asyncHandler(async(req, res) => {
    const sort = {'_id': -1}
    const tasks = await Task.find({user: req.user._id}).sort(sort)
    res.json(tasks)
})

//@desc Create a Task
//@route POST /api/tasks
//@access Private
const createTasks = asyncHandler(async(req, res) => {
    const { name, task } = req.body

    if(name === '' || task === ''){
        res.status(400)
        throw new Error('No name and task found, enter name and task')
    }else{
        const newtask = new Task({
            user: req.user._id,
            name, 
            task,
        })

        const createdTask = await newtask.save()

        res.status(201).json(createdTask)
    }   
})

//@desc REmove a Task
//@route DELETE /api/tasks/:id
//@access Private
const removeTasks = asyncHandler(async(req, res) => {
    const task = await Task.findById(req.params.id)

    if(task){
        await task.remove()
        res.json({message: 'Task  removed'})
    }else{
        res.status(404)
        throw new Error('Task not Found')
    }
})



export { getTasks, createTasks, removeTasks }

