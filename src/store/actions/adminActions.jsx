import { API } from '../../components/utils/api'

export const getUsers = (token) => {
    return (dispatch) => {
        API.getUsers (token, res => {
            dispatch({
                type: 'GOT_USERS',
                payload: res.data
            })
        })
    }
}

export const getPosts = (token) => {
    return (dispatch) => {
        API.getPosts (token, res => {
            dispatch({
                type: 'GOT_POSTS',
                payload: res.data
            })
        })
    }
}

export const register = (email, password) => {
    return {
        type: 'REGISTER',
        payload: {email, password}
    }
}