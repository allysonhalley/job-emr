import { combineReducers } from 'redux';

import occupations from './occupations';
import employees from './employees';

export const reducers = combineReducers({ occupations, employees });
