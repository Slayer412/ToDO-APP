import React,{ useState, useEffect } from 'react'
import { Row } from 'react-bootstrap'
import Task from '../components/Task'

const HomeScreen = () => {
    const[tasks , setTasks ] = useState([])    

    return (
        <>
           <h1>Your Tasks</h1> 
           
            {tasks.map(task => (
                 
                    <Row>
                        <Task task={task} />
                    </Row>      
               
            ))}
            

        </>
    )
}

export default HomeScreen
