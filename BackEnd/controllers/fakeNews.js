const db=require('../data/database');
const { fakeNewsAuthenticatedTextandTitle, fakeNewsAuthenticatedURL } = require('../utils/utilFakeNews');
const { requestTextandTitle,requestURL } = require('../httpRequests/aiModel');

module.exports.detectFakeNewsUsingTestandTitle=async (req,res)=>{
  const title=req.body.title;
  const text=req.body.text;
  if(req.email){
    try{
      const result=await fakeNewsAuthenticatedTextandTitle(text,req.email)
    }catch(error){
      return res.status(500).json({message:"Server error: Something went wrong. Try again later."})
    }
    if(result.message!==""){
      res.status(400).json({message:result.message})
    }
    const data= await requestTextandTitle(text,title)
    return res.status(200).json({value:data})
  }
  else{
    const data= await requestTextandTitle(text,title)
    return res.status(200).json({value:data})
  }
}

module.exports.detectFakeNewsUsingUrl=async (req,res)=>{
  const url=req.body.url;
  if(req.email){
    try{
      const result=await fakeNewsAuthenticatedURL(url,req.email)
    }
    catch(error){
      return res.status(500).json({message:"Server error:Something went wrong. Try again later."})
    }
    if(result.message!==""){
      return res.json({message:result.message})
    }
    const data= await requestURL(url)
    return res.status(200).json({value:data})
  }
  else{
    return res.status(422).json({message:"You can't check a news using url if you are not authentificated."})
  }
}