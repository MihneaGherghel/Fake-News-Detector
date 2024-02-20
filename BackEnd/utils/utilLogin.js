const { sign, verify } = require('jsonwebtoken');
const { compare } = require('bcrypt');
const db=require('../data/database');

const KEY = 'topsecret';

// create a token
module.exports.createJSONToken=(email) => {
  return sign({ email }, KEY, { expiresIn: '1h' });
}

// verify if the token is valid
const verifyJSONToken=(token)=>{
  return verify(token, KEY);
}

// Middleware for auth
module.exports.checkAuthMiddleware=async (req, res, next)=>{
  // check for the presence and the validity of an authorization header
  if (!req.headers.authorization) {
    return res.json({message:"You can't check a news if you are not authentificated."});
  }
  const authFragments = req.headers.authorization.split(' ');
  if (authFragments.length !== 2) {
    return res.json({message:"You can't check a news if you are not authentificated."});;
  }
  const authToken = authFragments[1];
  // verify the token
  try {
    const validatedToken = verifyJSONToken(authToken);
    req.email = validatedToken.email;
  } catch (error) {
    ip=req.ip;
    const devices = await db.query('SELECT * FROM fake_news.devices WHERE devices.ip=(?)',[[ip]]);
    if(devices[0].length==0){
      await db.query('INSERT INTO fake_news.devices (ip,attempts) VALUES (?)',[[ip,1]]);
      return next()
    }
    else {
      const attempts = devices[0][0].attempts
      await db.query('UPDATE fake_news.devices SET attempts = attempts + 1 WHERE devices.ip=(?)',[[ip]]);
      if(attempts<=3){
        return next()
      }
      else{
        return res.json({message:"You can't check more than three news when you are not authentificated."});
      }
    }
  }
  // go to the next middleware
  next();
}


// verify if the password is valid
module.exports.isValidPassword=(password, storedPassword)=>{
  return compare(password, storedPassword);
}