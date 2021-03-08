import express  from 'express'
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

app.get('/', (req, res) => {
    res.send('API is running')
})

app.use('/api/tasks',taskRoutes)
app.use('/api/users',userRoutes)

app.use(notFound)

app.use(errorHandler)

const port = process.env.PORT || 4444
app.listen(port,console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${port}`.rainbow))