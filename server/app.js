const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');



const app= express();



// import routes:
const users = require('./routes/users');
const expenses = require('./routes/expenses');
const path =require('path')


const db = require('./config/mongodb').mongoURI;
app.use(bodyParser.urlencoded({extended:false})); 
app.use(bodyParser.json());

mongoose.connect(db, { useFindAndModify: false, useNewUrlParser:true }).then(()=>console.log('Monggo db connecteed')).catch(err=>console.log(err));



app.use('/api/users', users);
app.use('/api/expenses', expenses );

//Serve Static assets in productions
if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'));
    app.get('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client','build', 'index.html'));
    })
}

// Passport Config
require('./config/passport')(passport);

// Passport middleware
app.use(passport.initialize());



const PORT=process.env.PORT||5000;

app.listen(port, () => console.log(`Server running on port ${PORT}`));
