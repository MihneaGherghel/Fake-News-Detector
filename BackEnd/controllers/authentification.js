const db=require('../data/database');
const {validationSignUp, hashPassword}=require('../utils/utilSignup')
const {createJSONToken, isValidPassword}=require("../utils/utilLogin")

module.exports.login=async (req,res)=>{
    const {email,password}=req.body;
    let user;
    try {
        user = await db.query('SELECT * FROM users WHERE users.email=(?)',[[email]]);
    } catch (error) {
        return res.status(500).json({ error:'Server error', message: 'Authentication failed. Try again later' });
    }
    const passwordIsValid = await isValidPassword(password, user[0][0].password);
    if (!passwordIsValid) {
        return res.status(422).json({
            error: 'Invalid credentials.',
            message: 'Invalid email or password entered.',
        });
    }
    const token = createJSONToken(email);
    res.json({ message:"You are log in", token:token });
}

module.exports.signup=async (req,res)=>{
    const {email,password,confirmPassword}=req.body
    const validationErrors=validationSignUp(email,password,confirmPassword)
    if(validationErrors.error==1){
        res.status(400).send({error:"User error",message:"There are some mistakes", mistakes:validationErrors})
        return ;
    }
    try {
        const users = await db.query('SELECT * FROM users');
        for(const user of users[0]){
            if(user.email==email){
                return res.status(422).send({error:"User error",message:"There is an account with this email address!"})
            }
        }

    } catch (error) {
        return res.status(500).json({ error:" Server error",message: 'Sign up failed. Try again later.' });
    }
    try{
        const hashPass=await hashPassword(password) 
        data=[email,hashPass]
        await db.query('INSERT INTO fake_news.users (email,password) VALUES (?)',[data]);
        return res.status(200).send({message:"User was added"});
    }catch(error){
        return res.status(500).send({error:"Server error", message:'Sign up failed. Try again later.'})
    }
}
