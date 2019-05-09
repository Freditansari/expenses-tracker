const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExpenseInput(data){

    let errors={};

    data.description = !isEmpty(data.description)? data.description : '';
    data.amount = ! isEmpty(data.amount)? data.amount: '';
    // data.user = ! isEmpty(data.user)? data.user: '';

    if(Validator.isEmpty(data.description)){
        errors.description = 'description is required';

    }
    
    if(isNaN(data.amount) || isEmpty(data.amount)){
        errors.amount = 'amount is required'; 
        
    }
  

    return {
        errors,
        isValid: isEmpty(errors)
      };
}