const defaultState = {
    user: {},
    token: null
}

export const auth = (state = defaultState, action) => {
    switch(action.type) {
        case 'LOGIN':
            return {
                ...state,
                profile: action.payload.profile,
                token: action.payload.token
            }
        default:
            return state
    }
}
