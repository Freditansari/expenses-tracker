//create expenses route

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/mongodb');
const passport = require('passport');

const Expense = require('../models/Expense');
const User = require('../models/User');

const validateExpenseInput = require('../validators/expense');

// @route   GET api/expenses/test
// @desc    Tests expenses route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Expenses Works' }));


// @route   POST api/expenses/add
// @desc    add expense route
// @access  Public
router.post('/add',passport.authenticate('jwt', { session: false }), (req, res)=>{
    // res.json(req.body)
    const {errors, isValid} = validateExpenseInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
    

    if(!req.body.expenseDate){
       date = Date.now();
    }else{
        date= req.body.expenseDate;
    }

    const newExpense = new Expense({
        description: req.body.description,
        amount : req.body.amount,
        notes: req.body.note,
        expenseDate: req.body.createdAt, 
        user: req.user.id
    });

   
    console.log(newExpense);
    newExpense.save().then(expense => res.json(expense)).catch(error => res.status(500).json(errors));


}); 


// @route   POST api/expenses/getUserExpenses
// @desc    query expenses by user id and date range
// @access  Public
router.post('/getUserExpenses', passport.authenticate('jwt', { session: false }), (req, res)=>{
    


     Expense.find({$and:[{user:req.user.id},{expenseDate:{$gte: req.body.from,$lte:req.body.to}}]})
        .then(expenses=>{
                if(!expenses){
                    res.status(404).json(errors);
                }
                res.json(expenses)
            }).catch(errors=> res.status(500).json(errors));

    }
);


// @route   POST api/expenses/edit
// @desc    edit expenses by id
// @access  Public
router.post('/edit', passport.authenticate('jwt', { session: false }), (req, res)=>{
    const {errors, isValid} = validateExpenseInput(req.body);
    if(!isValid){
        return res.status(400).json(errors);
    }
 
    Expense.findByIdAndUpdate(req.body.id, req.body, {new: true}).then(expense =>{
        res.status(200).json(expense);
    }).catch(errors=> res.status(500).json(errors))
});

module.exports = router;