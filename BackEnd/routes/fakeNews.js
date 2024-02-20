const express = require('express');
const {checkAuthMiddleware} = require("../utils/utilLogin")
const router = express.Router();
const {detectFakeNewsUsingTestandTitle,detectFakeNewsUsingUrl} = require("../controllers/fakeNews")

// check authentification 
router.use(checkAuthMiddleware);

// route for fake news detection using text and title
router.post("/textAndTitle",detectFakeNewsUsingTestandTitle)

// route for fake news detection using url
router.post("/url",detectFakeNewsUsingUrl)

module.exports=router