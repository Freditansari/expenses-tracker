const expensesReducerDefaultState=[];

export default(state = expensesReducerDefaultState, action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
            console.log(action.type)
            return [...state,
                 action.expense
                ];
        // case 'REMOVE_EXPENSE':
        //     return state.filter(({id})=> id !=- action.id);
        
        // case 'EDIT_EXPENSE':
        //     return state.map((expense)=>{
        //         if (expense.id ==action.id){
        //             return{
        //                 ...expense,
        //                 ...action.updates
        //             };
        //         }else{
        //             return expense;
        //         }
        //     });
        // case 'SET_EXPENSES':
        //     return action.expenses;
        default: 
            return state;
    }
}