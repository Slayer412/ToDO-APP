import * as userActions from '../constants/userConstants'

export const userLoginReducer = (state = {},action) => {
    switch(action.type){
        case userActions.USER_LOGIN_REQUEST:
            return { loading: true }
        case userActions.USER_LOGIN_SUCCESS:
            return{ loading: false, userInfo: action.payload }
        case userActions.USER_LOGIN_FAILED:
            return{ loading: false, error: action.payload }
        case userActions.USER_LOGOUT:
            return{}
        default:
            return state
    }
        
}

export const userRegisterReducer = (state = {},action) => {
    switch(action.type){
        case userActions.USER_REGISTER_REQUEST:
            return { loading: true }
        case userActions.USER_REGISTER_SUCCESS:
            return{ loading: false, userInfo: action.payload }
        case userActions.USER_REGISTER_FAILED:
            return{ loading: false, error: action.payload }
        default:
            return state
    }
        
}