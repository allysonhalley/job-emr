import { FETCH_EMPLOYEES, FETCH_EMPLOYEE, CREATE_EMPLOYEE, UPDATE_EMPLOYEE, DELETE_EMPLOYEE } from '../constants/actionTypes';

export default (state = { employees: [] }, action) => {
    switch (action.type) {
        case FETCH_EMPLOYEES:
            return  {...state,
                employees: action.payload.data
            };
        case FETCH_EMPLOYEE:
            return  {
                ...state,
                employees: state.employees.map((employee) => {
                    if (employee._id == +bindActionCreators.payload._id) {
                        return action.payload;
                    }
                    return employee;
                })
            };
        case CREATE_EMPLOYEE:
            return { ...state,
                employees: [...state.employees, action.payload]
            };
        case UPDATE_EMPLOYEE:
            return { ...state,
                employees: state.employees.map((employee) =>
                (employee._id === action.payload._id ? action.payload : employee))
            };
        case DELETE_EMPLOYEE:
            return { ...state,
                employees: state.employees.filter((employee) =>
                employee._id !== action.payload)
            };
        default:
            return state;
    }
}