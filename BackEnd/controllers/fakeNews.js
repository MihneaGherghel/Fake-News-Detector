const { fakeNewsAuthenticatedTextandTitle, fakeNewsAuthenticatedURL } = require('../utils/news/utilFakeNews');
const { requestTextandTitle,requestURL } = require('../httpRequests/aiModel');
const { saveNews } = require('../utils/news/saveNews');

module.exports.detectFakeNewsUsingTestandTitle=async (req,res)=>{
  const title=req.body.title;
  const text=req.body.text;
  let result;
  if(req.email){
      result=await fakeNewsAuthenticatedTextandTitle(title,text,req.email)
      if(result.message!==""){
        return res.status(400).json({error:"User error",message:result.message})
      }
      const data= await requestTextandTitle(text,title)
      await saveNews(req.email,data)
      return res.status(200).json({value:data})
  }
  else{
    try{
      const data= await requestTextandTitle(text,title)
      return res.status(200).json({value:data})
    }catch(error){
      return res.status(500).json({error:"Server error", message:"Server error: Fake News Detection failed. Try again later!"})
    }
  }
}

module.exports.detectFakeNewsUsingUrl=async (req,res)=>{
  const url=req.body.url;
  let result
  if(req.email){
    try{
      result=await fakeNewsAuthenticatedURL(url,req.email)
      if(result.message!==""){
        return res.json({error:"User error",message:result.message})
      }
      const data= await requestURL(url)
      await saveNews(data,req.email)
      return res.status(200).json({value:data})
    }catch(error){
      return res.status(500).json({error:"Server error", message:'Server error: Sign up failed. Try again later.'})
    }
  }
  else{
    return res.status(422).json({error:"User error",message:"You can't check a news using url if you don't have a subscription."})
  }
}