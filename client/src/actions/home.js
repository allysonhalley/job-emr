import { FETCH_ROOT } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const home = () => async (dispatch) => {
    try {
        dispatch({ type: FETCH_ROOT });        
    } catch (error) {
        console.log(error);
    }
}