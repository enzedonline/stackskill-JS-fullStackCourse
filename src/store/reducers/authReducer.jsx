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
                // name: action.payload.profile.firstName + ' ' + action.payload.profile.lastName,
                // email: action.payload.profile.email,
                // roles: action.payload.profile.roles,
                token: action.payload.token
            }
        default:
            return state
    }
}
