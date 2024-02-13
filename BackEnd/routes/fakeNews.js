const express = require('express');
const {checkAuthMiddleware} = require("../utils/utilLogin")
const router = express.Router();


router.use(checkAuthMiddleware);
router.post("/textAndTitle",function(req,res){
  const title=req.body.title;
  const text=req.body.text;
  res.status(200).json({value:40})
})

router.post("/url",function(req,res){
  const url=req.body.url;
  res.status(200).json({value:80})
})

module.exports=router