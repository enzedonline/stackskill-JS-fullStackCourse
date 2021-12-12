import { API } from '../../components/utils/api'

export const getCategories = (token) => {
    return (dispatch) => {
        API.getCategories (token, res => {
            dispatch({
                type: 'GOT_CATEGORIES',
                payload: res.data
            })
        })
    }
}
