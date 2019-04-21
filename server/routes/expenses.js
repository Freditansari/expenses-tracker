//create expenses route

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../config/mongodb');
const passport = require('passport');

const Expense = require('../models/Expense')

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

    const newExpense = new Expense({
        description: req.body.description,
        amount : req.body.amount,
        // expenseDate: req.body.expenseDate ? req.body.expenseDate: ''
        expenseDate: req.body.expenseDate, 
        userName: req.body.userName
    });

    newExpense.save().then(expense => res.json(expense)).catch(error => console.log(error));


}); 

// @route   POST api/expenses/getDateRange
// @desc    query date range
// @access  Public
router.post('/getDateRange', passport.authenticate('jwt', { session: false }), (req, res)=>{
    let errors ={}

    //do a validaation check from should not be bigger than to. 

    //find expense from specified range

  try {
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
      
  } catch (error) {
      res.json(error)
  }

 


});

module.exports = router;