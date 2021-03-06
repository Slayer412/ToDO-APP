import React from 'react'
import { Card } from 'react-bootstrap'

const Task = ({ task }) => {
    return (
        <>
            <Card className='my-3 py-2 rounded'>
                <Card.Body>
                    <Card.Title as='div'>
                          <h4>Name: <strong>{task.name}</strong></h4>
                    </Card.Title>
                    <Card.Text as='div'>
                        <div className='my-3'>
                            <strong style={{fontSize:'large'}}>Task: </strong>
                            {task.task}
                        </div>
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    )
}

export default Task
