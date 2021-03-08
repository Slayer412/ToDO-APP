import * as taskActions from '../constants/taskConstants'

export const taskListReducer = (state = {tasks:[]},action) => {
    switch(action.type){
        case taskActions.TASK_LIST_REQUEST:
            return { loading: true }
        case taskActions.TASK_LIST_SUCCESS:
            return{ loading: false, success: true, tasks: action.payload }
        case taskActions.TASK_LIST_FAILED:
            return{ loading: false, error: action.payload }
        case taskActions.TASK_LIST_RESET:
            return{}
        default:
            return state
    }
        
}

export const taskCreateReducer = (state = {},action) => {
    switch(action.type){
        case taskActions.TASK_CREATE_REQUEST:
            return { loading: true }
        case taskActions.TASK_CREATE_SUCCESS:
            return{ loading: false, tasks: action.payload, success: true }
        case taskActions.TASK_CREATE_FAILED:
            return{ loading: false, error: action.payload }
        default:
            return state
    }     
}

export const taskDeleteReducer = (state = {},action) => {
    switch(action.type){
        case taskActions.TASK_DELETE_REQUEST:
            return { loading: true }
        case taskActions.TASK_DELETE_SUCCESS:
            return{ loading: false, success: true}
        case taskActions.TASK_DELETE_FAILED:
            return{ loading: false, error: action.payload }
        default:
            return state
    }
        
}