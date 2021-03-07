import React,{ useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Task from '../components/Task'
import axios from 'axios'


const HomeScreen = () => {
    const[tasks , setTasks ] = useState([]) 
    
    useEffect(() => {
        const fetchTask = async () => {
            const { data } = await axios.get('/api/tasks')
            setTasks(data)
        }
        fetchTask()
    },[])

    return (
        <>
           <h1>Your Tasks</h1> 
           
            {tasks.map(task => (
                 
                    <Row key={task._id}>
                        <Task task={task} />
                    </Row>      
               
            ))}
            

        </>
    )
}

export default HomeScreen
