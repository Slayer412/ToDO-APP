import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { userLoginReducer, userRegisterReducer } from './reducers/userReducers'
import { taskListReducer, taskCreateReducer, taskDeleteReducer } from './reducers/taskReducer'

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    taskList: taskListReducer,
    taskCreate: taskCreateReducer,
    taskDelete: taskDeleteReducer,
})

const userInfoFromStroage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null 

const initialState = {
    userLogin: { userInfo: userInfoFromStroage }
}

const middleware =  [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store    