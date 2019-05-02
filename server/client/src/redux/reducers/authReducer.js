import isEmpty from "../../validation/isEmpty";

const authReducerDefaultState =[
    {
        isAuthenticated: false,
        user: {}
    }
];

export default(state = authReducerDefaultState, action)=>{
    switch(action.type){
  
        case 'SET_CURRENT_USER':
            return{
                ...state,
                isAuthenticated: !isEmpty(action.payload), 
                user:action.payload
            }
        default: 
            return state;
    }
}