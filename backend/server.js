const express = require('express')
const tasks = require('./data/Tasks')
const app = express()

app.get('/', (req, res) => {
    res.send('API is running')
})

app.get('/api/tasks', (req, res) => {
    res.json(tasks)
})

app.listen(4444,console.log('Server Running on Port 4444'))