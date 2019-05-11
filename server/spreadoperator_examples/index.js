const expenses = [
    {id: 1, desc: "bought potato", amount: 100},
    {id: 2, desc: "bought coleslaw", amount: 250},
    {id: 3, desc: "bought wheat grass", amount: 150},
];

const newExpenses= [
    {id: 4, desc: "bought plastics", amount: 500},
    {id: 5, desc: "bought flours", amount: 500}
]

//spread operator to add items into array
let mergedExpenses =[...expenses, ...newExpenses]

//we can also do this if the new expense is a single item. 
// const mergedExpenses =[...expenses, newExpenses]

console.log(mergedExpenses);


console.log('****************remove item with id 3 from the array***********************');

// remove item with id number 3 from array
console.log(mergedExpenses =mergedExpenses.filter((expense)=> expense.id!== 3));

console.log('***************************************');

newUpdate ={id: 4, desc: "bought more plastics", amount: 250},

editExpense = (expenses) => {
    return expenses.map((expense) =>{
        if(expense.id ==4){
            return {
                ...expense, 
                ...newUpdate
            }
        }else{
            return expense;
        }
    })
};

console.log(editExpense(mergedExpenses));
