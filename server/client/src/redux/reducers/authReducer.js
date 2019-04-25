const authReducerDefaultState =[];

export default(state = authReducerDefaultState, action)=>{
    switch(action.type){
        // case 'ADD_USER':
        //     return [state, action.user];
        default: 
            return state;
    }
}