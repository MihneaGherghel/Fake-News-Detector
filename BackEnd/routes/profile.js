const express = require('express');
const {checkAuthMiddlewareProfile} = require("../utils/profile/checkAuthProfile")
const {getProfile} = require("../controllers/profile")
const router = express.Router();

// route for fake news detection using text and title
router.get("/profile",checkAuthMiddlewareProfile,getProfile)

module.exports=router
