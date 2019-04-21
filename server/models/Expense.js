const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExpenseSchema = new Schema({
        description:{
            type: String,
            required: true
        },
        amount:{
            type: Number,
            required: true
        }, 
        expenseDate:{
            type: Date,
            default: Date.now
        }, 
        userName: {
            type: String, 
            required:true
        }

  });

  module.exports = Expense = mongoose.model('expenses', ExpenseSchema);