import * as userActions from '../constants/userConstants'
import axios from 'axios'

export const login = (email, password) => async(dispatch) => {
    try{
        dispatch({
            type:userActions.USER_LOGIN_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users/login',{ email, password }, config)

        dispatch({
            type: userActions.USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:userActions.USER_LOGIN_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('userInfo')
    dispatch({type:userActions.USER_LOGOUT})
}

export const register = (name,email, password) => async(dispatch) => {
    try{
        dispatch({
            type:userActions.USER_REGISTER_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const {data} = await axios.post('/api/users',{ name, email, password }, config)

        dispatch({
            type: userActions.USER_REGISTER_SUCCESS,
            payload: data
        })

        dispatch({
            type:userActions.USER_LOGIN_SUCCESS,
            paydata: data
        })

        localStorage.setItem('userInfo',JSON.stringify(data))

    }catch(error){
        dispatch({
            type:userActions.USER_REGISTER_FAILED,
            payload: error.response && error.response.data.message ? error.response.data.message : error.message
        })
    }
}
