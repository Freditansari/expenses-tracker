const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');



const app= express();
const db = require('./config/mongodb').mongoURI;





// import routes:
const users = require('./routes/users');
const expenses = require('./routes/expenses')

app.use(bodyParser.urlencoded({extended:false})); 
app.unsubscribe(bodyParser.json());

mongoose.connect(db).then(()=>console.log('Monggo db connecteed')).catch(err=>console.log(err));

app.get('/', (req, res)=>res.send('hello world'));

app.use('/api/users', users);
app.use('/api/expenses', expenses );

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
