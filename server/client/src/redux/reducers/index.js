import { combineReducers } from "redux";
import authReducer from './authReducer'


export default combineReducers({
    auth: authReducer
    // errors: errorrReducer,
    // expenses: expensesReducer, 
    // filters: filtersReducer

});