import express  from 'express'
import path from 'path'
import cors from 'cors'
import dotenv  from 'dotenv'
import connectDB from './config/db.js'
import taskRoutes from './routes/taskRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound }  from './middleware/errorMiddleware.js'

dotenv.config() 

connectDB()

const app = express()

app.use(express.json())

app.use(cors())



app.use('/api/tasks',taskRoutes)
app.use('/api/users',userRoutes)

const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname,'frontend','build','index.html')))
}else{
    app.get('/', (req, res) => {
        res.send('API is running')
    })
}

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 4444
app.listen(port,console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${port}`.rainbow))