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
        //expenseDate: req.body.expenseDate ? req.body.expenseDate: {expenseDate: new Date()},
        expenseDate: date, 
        user: req.body.user
    });

    newExpense.save().then(expense => res.json(expense)).catch(error => res.status(500).json(error));


}); 


// @route   POST api/expenses/getUserExpenses
// @desc    query expenses by user id and date range
// @access  Public
router.post('/getUserExpenses', passport.authenticate('jwt', { session: false }), (req, res)=>{

        User.findById(req.body.id).then(user =>{
            Expense.find({
                expenseDate: {
                    $gte: req.body.from,
                    $lte: req.body.to
                }
            }).then(expense =>{
                if (!expense){
                    res.status(404).json(errors);
                }
        
                res.json(expense);
            })

        }).catch(err =>res.status(500).json(err))

});


module.exports = router;