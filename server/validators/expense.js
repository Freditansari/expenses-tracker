const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validateExpenseInput(data){
    let errors={};

    data.description = !isEmpty(data.description)? data.description : '';
    data.amount = ! isEmpty(data.amount)? data.amount: '';
    data.userName = ! isEmpty(data.userName)? data.userName: '';

    if(Validator.isEmpty(data.description)){
        errors.description = 'description is required';

    }
    if(Validator.isEmpty(data.amount)){
        errors.amount = 'amount is required'; 
        
    }
    if(Validator.isEmpty(data.userName)){
        errors.userName = 'user name is required'; 
        
    }

    return {
        errors,
        isValid: isEmpty(errors)
      };
}