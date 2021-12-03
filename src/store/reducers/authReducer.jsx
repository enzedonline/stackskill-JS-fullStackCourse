const defaultState = {
    user: {},
    token: null
}

export const auth = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                user: action.payload.email,
                token: action.payload.token
            }
        default:
            return state
    }
}
