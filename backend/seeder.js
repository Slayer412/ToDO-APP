import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import tasks from './data/tasks.js'
import User from './models/userModel.js'
import Task from './models/taskModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async() => {
    try{
        await User.deleteMany()
        await Task.deleteMany()

        await User.insertMany(users)
        await Task.insertMany(tasks)

        console.log('data imported!'.green.inverse)
    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async() => {
    try{
        await User.deleteMany()
        await Task.deleteMany()

        console.log('data destroyed!'.red.inverse)
    }catch(error){
        console.error(`${error}`.red.inverse)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}