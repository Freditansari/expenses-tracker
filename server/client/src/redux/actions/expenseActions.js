import Axios from "axios";

export const startAddExpense =(expenseData, history)=> dispatch =>{
    Axios.post("/api/expenses/add", expenseData)
        .then(res =>{

            //dispatch to redux and redirect to dashboard 
            //TODO: consider the dispatch is not used. 
                dispatch(
                    {
                        type: "ADD_EXPENSE",
                        expense: expenseData
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

