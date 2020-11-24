import { 
    HOME_LIST_REQUEST,
    HOME_LIST_SUCCESS,
    HOME_LIST_FAIL 
} from '../constants/homeConstants'



export const homeListReducer = (state = { homes: [] }, action) => {
    switch(action.type) {
        case HOME_LIST_REQUEST:
            return { loading: true, homes: [] }
        case HOME_LIST_SUCCESS:
            return { loading: false, homes: action.paylaod}
        case HOME_LIST_FAIL:
            return { loading: false, error: action.payload}
        default:
            return state
    }
}

// export const homeDetailsReducer = (state = { homes: [] }, action) => {
//     switch(action.type) {
//         case 'HOME_DETAILS_REQUEST':
//             return { loading: true, homes: [] }
//         case 'HOME_LIST_SUCCESS':
//             return { loading: false, homes: action.paylaod}
//         case 'HOME_LIST_FAIL':
//             return { loading: false, error: action.payload}
//         default:
//             return state
//     }
// }