const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ExpenseSchema = new Schema({
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        },
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
        }

  });

  module.exports = Expense = mongoose.model('expenses', ExpenseSchema);