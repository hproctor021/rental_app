

export const initialState = {
    usernameInput: '',
    passwordInput: '',
    user: {},
    loggedIn: false,
    emailInput: '',
    imageInput: '',
    nameInput: '',
    homes: [],

    descriptionInput: '',
    locationInput: '',
    daily_priceInput: 0.00,
    bedroomInput: 0,
    bathroomInput: 0,
    imageInput: '',
    home: {},
    loading: true
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
                user: action.user,
                loggedIn: true
            }
        break;
        case 'SET_NAME_INPUT':
            return {
                ...state,
                nameInput: action.value
            }
        break;
        case 'SET_IMAGE_INPUT':
            return {
                ...state,
                imageInput: action.image
            }
        break;
        case 'SET_EMAIL_INPUT':
            return {
                ...state,
                emailInput: action.value
            }
        break;
        case 'SET_ALL_HOMES':
            return {
                ...state,
                homes: action.homes
            }
        break;
        case 'SET_DESCRIPTION_INPUT':
            return {
                ...state,
                descriptionInput: action.value
            }
        break;
        case 'SET_LOCATION_INPUT':
            return {
                ...state,
                locationInput: action.value
            }
        break;
        case 'SET_DAILY_PRICE_INPUT':
            return {
                ...state,
                daily_priceInput: action.value
            }
        break;
        case 'SET_BEDROOM_INPUT':
            return {
                ...state,
                bedroomInput: action.value
            }
        break;
        case 'SET_BATHROOM_INPUT':
            return {
                ...state,
                bathroomInput: action.value
            }
        break;
        case 'SET_HOME':
            return {
                ...state,
                home: action.home,
                loading: false
            }
        break;
    }
    return state
}