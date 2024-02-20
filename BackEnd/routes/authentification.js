const express = require('express');

const router = express.Router();

const {login,signup}=require("../controllers/authentification")

// route for signup 
router.post('/signup',signup)

// route for login
router.post('/login',login)

module.exports=router;