import { combineReducers } from "redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import expensesReducer from './expensesReducer';
import filterReducer from './filterReducer'


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    expenses: expensesReducer, 
    filters:filterReducer

    // filters: filtersReducer

});