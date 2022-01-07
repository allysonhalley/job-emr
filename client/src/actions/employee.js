import { FETCH_EMPLOYEES, FETCH_EMPLOYEE, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes';
import * as api from '../api/index';

export const getEmployees = () => async (dispatch) =>{
    try {
        const { data } = await api.fetchEmployees();

        dispatch({ type: FETCH_ })
    } catch (err) {
        
    }
}