const { sign, verify } = require('jsonwebtoken');
const { compare } = require('bcrypt');

const KEY = 'topsecret';

// create a token
module.exports.createJSONToken=(email) => {
  return sign({ email }, KEY, { expiresIn: '1h' });
}

// verify if the token is valid
const verifyJSONToken=(token)=>{
  return verify(token, KEY);
}

module.exports.checkAuthFunction=async (req,message)=>{
  if (!req.headers.authorization) {
    return {message:message}
  }
  const authFragments = req.headers.authorization.split(' ');
  if (authFragments.length !== 2) {
    return {message:message}
  }
  const authToken = authFragments[1];
  try {
    const validatedToken = verifyJSONToken(authToken);
    return {message:validatedToken.email}
  } catch (error) {
    return {message:message}
  }
}


// verify if the password is valid
module.exports.isValidPassword=(password, storedPassword)=>{
  return compare(password, storedPassword);
}