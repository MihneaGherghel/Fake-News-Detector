const express = require('express');
const fakeNewsRoutes = require('./routes/fakeNews');
const authentificationRoutes=require('./routes/authentification')
const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');

  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(authentificationRoutes)
app.use(fakeNewsRoutes);


app.listen(3000)