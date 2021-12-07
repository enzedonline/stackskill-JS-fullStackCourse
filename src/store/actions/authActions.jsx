import { API } from '../../components/utils/api'

export const login = (email, password) => {
    return (dispatch) => {
        API.login(email, password, result => {
            console.log('authlogin', result.data.profile)
            dispatch({
                type: 'LOGIN', 
                payload: {
                    profile: result.data.profile,
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