import React, { useState, useEffect } from 'react'
import { Row, Form } from 'react-bootstrap'
import Task from '../components/Task'
import { useDispatch, useSelector } from 'react-redux'
import FormContainer from '../components/FormContainer'
import { Button } from 'react-bootstrap'
import { createTask, listTasks } from '../actions/taskActions'
import Loader from '../components/Loader'
import Message from '../components/Message'
import { Col } from 'react-bootstrap'



const HomeScreen = ({ history }) => {
    const [name, setName] = useState('')
    const [task, setTask] = useState('')

    const dispatch = useDispatch()


    const taskList = useSelector(state => state.taskList)
    const { loading, error, tasks } = taskList

    const taskCreate = useSelector(state => state.taskCreate)
    const { error: taskCreateError } = taskCreate

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    // const taskDelete = useSelector(state => state.taskDelete)
    // const { loading: loadingDelete , error: errorDelete, success: successDelete } = taskDelete


    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            dispatch(listTasks())
        }
    }, [dispatch, history, userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (userInfo) {
            dispatch(createTask(name, task))
            dispatch(listTasks())
            setName('')
            setTask('')
            dispatch(listTasks())

        } else {
            history.push('/login')
        }
    }




    return (
        <>
            {taskCreateError && <Message variant='danger'>{taskCreateError}</Message>}
            <FormContainer>
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='text' placeholder='enter Name' value={name} onChange={(e) => setName(e.target.value)} required></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='task'>
                        <Form.Label>Task</Form.Label>
                        <Form.Control as='textarea' rows={3} placeholder='enter task' value={task} onChange={(e) => setTask(e.target.value)} required></Form.Control>
                    </Form.Group>

                    <Button type='submit' variant='success'>Create Task</Button>
                </Form>
            </FormContainer>
            <h1>Your Tasks</h1>


            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <Row>
                    {tasks.map((task) => (
                        <Col key={task._id} sm={12} md={6}>
                            <Task task={task} />
                        </Col>
                    ))}

                </Row>
            )}




        </>
    )
}

export default HomeScreen
