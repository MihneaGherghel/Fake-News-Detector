const db=require('../../data/database');
const {checkAuthFunction} = require("../../utils/authentification/utilLogin")

module.exports.checkAuthMiddlewareNews=async (req, res, next)=>{
  const message="You can't check a news if you are not authentificated."
  const checkAuth=await checkAuthFunction(req,message) 
  if(checkAuth.message!=message){
    req.email=checkAuth.message
    return next()
  }
  try{
    let ip=req.ip;
    const devices = await db.query('SELECT * FROM fake_news.devices WHERE devices.ip=(?)',[[ip]]);
    if(devices[0].length==0){
      await db.query('INSERT INTO fake_news.devices (ip,attempts) VALUES (?)',[[ip,1]]);
      return next()
    }
    else {
      const attempts = devices[0][0].attempts
      await db.query('UPDATE fake_news.devices SET attempts = attempts + 1 WHERE devices.ip=(?)',[[ip]]);
      if(attempts<3){
        return next()
      }
      else{
        return res.status(400).json({error:"Server error",message:"You can't check more than three news when you are not authentificated."});
      }
    }
  }catch(error){
    return res.status(500).json({error:"Server error",message:"Server error: Something went wrong. Try again later."});
  }
}