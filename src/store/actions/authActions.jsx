import { API } from '../../components/utils/api'

export const login = (email, password) => {
    return (dispatch) => {
        API.login(email, password, result => {
            console.log('authlogin', result)
            dispatch({
                type: 'LOGIN', 
                payload: {
                    email,
                    token: result.data.token
                }
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