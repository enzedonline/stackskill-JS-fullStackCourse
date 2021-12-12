const defaultState = {
    categories: [],
}

export const site = (state = defaultState, action) => {
    switch(action.type) {
        case 'GOT_CATEGORIES':
            return {
                ...state,
                categories: action.payload,
            }
            default:
            return state
    }
}
