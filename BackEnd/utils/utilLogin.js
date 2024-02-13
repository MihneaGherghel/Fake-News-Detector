const { sign, verify } = require('jsonwebtoken');
const { compare } = require('bcrypt');

const KEY = 'topsecret';

module.exports.createJSONToken=(email) => {
  return sign({ email }, KEY, { expiresIn: '1h' });
}

const verifyJSONToken=(token)=>{
  return verify(token, KEY);
}

module.exports.checkAuthMiddleware=(req, res, next)=>{
  if (!req.headers.authorization) {
    console.log('NOT AUTH. AUTH HEADER MISSING.');
    return res.json({message:"You can't check a news if you are not authentificated."});
  }
  const authFragments = req.headers.authorization.split(' ');
  if (authFragments.length !== 2) {
    console.log('NOT AUTH. AUTH HEADER INVALID.');
    return res.json({message:"You can't check a news if you are not authentificated."});;
  }
  const authToken = authFragments[1];
  try {
    const validatedToken = verifyJSONToken(authToken);
    req.token = validatedToken;
  } catch (error) {
    console.log(1)
    console.log('NOT AUTH. TOKEN INVALID.');
    return res.json({message:"You can't check a news if you are not authentificated."});
  }
  next();
}

module.exports.isValidPassword=(password, storedPassword)=>{
  return compare(password, storedPassword);
}

/*
module,exports.checkAuthMiddleware=(req, res, next)=> {
  if (req.method === 'OPTIONS') {
    return next();
  }
  if (!req.headers.authorization) {
    console.log('NOT AUTH. AUTH HEADER MISSING.');
    return next(new NotAuthError('Not authenticated.'));
  }
  const authFragments = req.headers.authorization.split(' ');

  if (authFragments.length !== 2) {
    console.log('NOT AUTH. AUTH HEADER INVALID.');
    return next(new NotAuthError('Not authenticated.'));
  }
  const authToken = authFragments[1];
  try {
    const validatedToken = validateJSONToken(authToken);
    req.token = validatedToken;
  } catch (error) {
    console.log('NOT AUTH. TOKEN INVALID.');
    return next(new NotAuthError('Not authenticated.'));
  }
  next();
}
*/