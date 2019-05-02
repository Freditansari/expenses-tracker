import { combineReducers } from "redux";
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import expensesReducer from './expensesReducer';


export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    expenses: expensesReducer, 
    // filters: filtersReducer

});