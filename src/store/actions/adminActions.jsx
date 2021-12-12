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

export const getPost = (id, token) => {
    return (dispatch) => {
        API.getPost (id, token, res => {
            dispatch({
                type: 'GOT_POST',
                payload: res.data
            })
        })
    }
}

export const createPost = (post, token) => {
    return (dispatch) => {
        API.createPost (post, token, res => {
            dispatch({
                type: 'POST_CREATED',
                payload: res.data
            })
        })
    }
}

export const updatePost = (id, post, token) => {
    return (dispatch) => {
        API.updatePost (id, post, token, res => {
            dispatch({
                type: 'POST_UPDATED',
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