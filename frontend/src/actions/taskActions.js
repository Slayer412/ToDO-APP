import * as taskActions from '../constants/taskConstants'
import axios from 'axios'

export const createTask = (name, task) => async(dispatch,getState) => {
    try{
        dispatch({
            type:taskActions.TASK_CREATE_REQUEST
        })

        const { userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                 Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.post('/api/tasks',{ name, task }, config)

        dispatch({
            type: taskActions.TASK_CREATE_SUCCESS,
            payload: data
        })


    }catch(error){
        dispatch({
            type:taskActions.TASK_CREATE_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}


export const listTasks = () => async(dispatch, getState) => {
    try{
        dispatch({
            type:taskActions.TASK_LIST_REQUEST
        })

        const { userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get('/api/tasks', config)

        dispatch({
            type: taskActions.TASK_LIST_SUCCESS,
            payload: data
        })

       

    
    }catch(error){
        dispatch({
            type:taskActions.TASK_LIST_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const deleteTasks = (id) => async(dispatch, getState) => {
    try{
        dispatch({
            type:taskActions.TASK_DELETE_REQUEST
        })

        const { userLogin: {userInfo}} = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

         await axios.delete(`/api/tasks/${id}`, config)

        dispatch({
            type: taskActions.TASK_DELETE_SUCCESS,
           
        })

       

    
    }catch(error){
        dispatch({
            type:taskActions.TASK_DELETE_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
