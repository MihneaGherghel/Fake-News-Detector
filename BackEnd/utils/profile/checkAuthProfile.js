const {checkAuthFunction} = require("../authentification/utilLogin");

module.exports.checkAuthMiddlewareProfile=async (req, res, next)=>{
  const message="You can't acces the profile if you are not authentificated."
  // check for the presence and the validity of an authorization header
  const checkAuth=await checkAuthFunction(req,message)
  if(checkAuth.message==message){
    return res.status(400).json({error:"User error",message:checkAuth.message});
  }
  req.email=checkAuth.message
  next();
}