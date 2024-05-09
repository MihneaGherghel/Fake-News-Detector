const express = require('express');
const {checkAuthMiddlewareNews} = require("../utils/news/checkAuthNews")
const router = express.Router();
const {detectFakeNewsUsingTestandTitle,detectFakeNewsUsingUrl} = require("../controllers/fakeNews")

// route for fake news detection using text and title
router.post("/textAndTitle",checkAuthMiddlewareNews,detectFakeNewsUsingTestandTitle)

// route for fake news detection using url
router.post("/url",checkAuthMiddlewareNews,detectFakeNewsUsingUrl)

module.exports=router