import { 
    HOME_LIST_REQUEST,
    HOME_LIST_SUCCESS,
    HOME_LIST_FAIL 
} from '../constants/homeConstants'
import axios from 'axios'


export const listHomes = () =>  async (dispatch) => {
    try {
        dispatch({ type: HOME_LIST_REQUEST })

        const { data } = await axios.get('http://localhost:3000/api/v1/homes')

        dispatch({
            type: HOME_LIST_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: HOME_LIST_FAIL,
            payload: 
                error.response && error.response.data.message 
                    ? error.response.data.message
                    : error.message,
        })
    }
}