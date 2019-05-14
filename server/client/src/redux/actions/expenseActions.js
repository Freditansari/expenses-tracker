import Axios from "axios";

export const startAddExpense =(expenseData, history)=> dispatch =>{

    Axios.post("/api/expenses/add", expenseData)
        .then(res =>{
            

            //dispatch to redux and redirect to dashboard 
            //TODO: consider the dispatch is not used. 
                dispatch(
                    {
                        type: "ADD_EXPENSE",
                        expense: res.data
                    })
                history.push("/dashboard"); 
            }
                           
            )
        .catch(err=>{
            dispatch({
                type: "GET_ERRORS", 
                payload: err.response.data
            })
            //dispatch redux errors
        }
           
        )
}

export const getAllExpenses = (expensesFilter, history)=>dispatch =>{
    //it only needs the start date and end date from filter redux then put the data into the expense redux this.state.
    //the node js will filter the user from the login token which being sent from the header
    Axios.post('/api/expenses/getUserExpenses', expensesFilter)
    .then(res =>{
       
        dispatch(
            {
                type: 'SET_EXPENSES',
                payload: res.data
            }
        )
    }).catch(errors => console.log(errors));


}

export const removeExpense =(id, history)=>dispatch =>{

    Axios.delete(`/api/expenses/delete/${id}`)
    .then(res=> {
        dispatch({
            type:"REMOVE_EXPENSE", 
            payload: res.data
        })

        history.push('/dashboard');

        
    }
        
        
            )
        .catch(err => 
            dispatch(
                {
                    type: "GET_ERRORS", 
                    payload: err.response.data
                }
            )

            )
}

export const editExpense = (expense, history) => dispatch =>{
  

    Axios.post(`/api/expenses/edit`,expense).then(res=>
        { 
            dispatch({
                type:"EDIT_EXPENSE",
                updates: res.data
                })

               
            }
        ).catch(err => console.log(err))
}



