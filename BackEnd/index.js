const express = require('express');
const fakeNewsRoutes = require('./routes/fakeNews');
const authentificationRoutes=require('./routes/authentification')
const stripeRoutes=require('./routes/stripe')
const app = express();

// Middleware for CORS support 
app.use((req, res, next) => {
  // allow request from http://localhost:5173
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

  // allow request methods: GET, POST, PUT, DELETE
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');

  // allow request headers: Content-Type, Authorization
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');

  // allow request with credentials
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

//  middleware parses this encoded data and makes it available in req.body
app.use(express.urlencoded({ extended: true }));

// middleware for make subscriptio
app.use(stripeRoutes)

// middleware parses this json data and makes it available in req.body
app.use(express.json());


// middleware for auth
app.use(authentificationRoutes)

// middleware for fake news
app.use(fakeNewsRoutes);


app.listen(3000)