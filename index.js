const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const user = require('./routes/user');
const recipe = require('./routes/recipe');
// const order = require('./routes/order');
const cart = require('./routes/cart');
const auth = require('./routes/auth');
const db = require('./services/db');

const app = express();

//Define the Port
const port = process.env.PORT || 3000;

//MIDDLEWARES
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//API Endpoint for User Management
app.use('/user', user);

//API Endpoint for Auth Management
app.use('/auth', auth);

// API Endpoint for Recipe Management
app.use('/recipe', recipe);

//API Endpoint for Cart Management
app.use('/cart', cart);

//API Endpoint for Order Management
// app.use('/order', order);

  // Listen on port 3000
  const server = app.listen(port, () => { console.log("Listening on port 3000")});

