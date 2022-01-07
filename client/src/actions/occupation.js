import { FETCH_OCCUPATIONS, FETCH_OCCUPATION, CREATE_OCCUPATION, UPDATE_OCCUPATION, DELETE_OCCUPATION } from '../constants/actionTypes';
import * as api from '../api/index';

export const getOccupations = () => async (dispatch) =>{
    try {
        console.log("aqui");
        const { data } = await api.fetchOccupations();
        console.log(data);


        dispatch({ type: FETCH_OCCUPATIONS, payload: { data } });
    } catch (error) {
        console.log(error);
    }
}