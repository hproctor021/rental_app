

export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: {},
    homes: []
}


export const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USERNAME_INPUT':
            return {
                ...state,
                usernameInput: action.value
            }
        break;
        case 'SET_PASSWORD_INPUT':
            return {
                ...state,
                passwordInput: action.value
            }
        break;
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        break;
        case 'SET_ALL_HOMES':
            return {
                ...state,
                homes: action.homes
            }
        break;
    }
    return state
}