import { FETCH_OCCUPATIONS, FETCH_OCCUPATION, CREATE_OCCUPATION, UPDATE_OCCUPATION, DELETE_OCCUPATION } from '../constants/actionTypes';

export default (state = { occupations: [] }, action) => {
    switch (action.type) {
        case FETCH_OCCUPATIONS:
            return  {...state,
                occupations: action.payload.data
            };
        case FETCH_OCCUPATION:
            return  {
                ...state,
                occupations: state.occupations.map((occupation) => {
                    if (occupation._id == +bindActionCreators.payload._id) {
                        return action.payload;
                    }
                    return occupation;
                })
            };
        case CREATE_OCCUPATION:
            return { ...state,
                occupations: [...state.occupations, action.payload]
            };
        case UPDATE_OCCUPATION:
            return { ...state,
                occupations: state.occupations.map((occupation) =>
                (occupation._id === action.payload._id ? action.payload : occupation))
            };
        case DELETE_OCCUPATION:
            return { ...state,
                occupations: state.occupations.filter((occupation) =>
                occupation._id !== action.payload)
            };
        default:
            return state;
    }
}
