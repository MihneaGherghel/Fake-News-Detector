const db=require('../data/database');
const {validationSignUp, hashPassword}=require('../utils/utilSignup')
const {createJSONToken, isValidPassword}=require("../utils/utilLogin")


// asynchronous function for handling login
module.exports.login=async (req,res)=>{
    // retrive email and password from req.body
    const {email,password}=req.body;
    let user;
    // verify if the email and password are valid
    try {
        user = await db.query('SELECT * FROM users WHERE users.email=(?)',[[email]]);
    } catch (error) {
        return res.status(500).json({ error:'Server error', message: 'Server error: Authentication failed. Try again later' });
    }
    if(user[0][0]==undefined){
        return res.status(422).json({
            error: 'Invalid credentials.',
            message: 'Invalid email or password entered.',
        });
    }
    const passwordIsValid = await isValidPassword(password, user[0][0].password);
    if (!passwordIsValid) {
        return res.status(422).json({
            error: 'Invalid credentials.',
            message: 'Invalid email or password entered.',
        });
    }
    // create and send JSON web token 
    const token = createJSONToken(email);
    const letter=email.charAt(0)
    res.json({ message:"You are log in", token:token,letter:letter.toUpperCase() });
}

// asynchronous function for handling signup
module.exports.signup=async (req,res)=>{
    // retrive email, password and confirm password from req.body
    const {email,password,confirmPassword}=req.body
    // verify if the email, password and confirm password are valid
    const validationErrors=validationSignUp(email,password,confirmPassword)
    // if there are errors return them
    if(validationErrors.error==1){
        res.status(400).send({error:"User error",message:"There are some mistakes", mistakes:validationErrors})
        return ;
    }

    // if the email is already in the database return an error
    try {
        const users = await db.query('SELECT * FROM users');
        for(const user of users[0]){
            if(user.email==email){
                return res.status(422).send({error:"User error",message:"There is an account with this email address!"})
            }
        }

    } catch (error) {
        return res.status(500).json({ error:" Server error",message: 'Server error:Sign up failed. Try again later.' });
    }

    // add the user to the database
    try{
        const hashPass=await hashPassword(password) 
        data=[email,hashPass]
        await db.query('INSERT INTO fake_news.users (email,password) VALUES (?)',[data]);
        const users = await db.query('SELECT * FROM users WHERE users.email=(?)',[[email]]);
        data=[users[0][0].id,3,0]
        await db.query('INSERT INTO fake_news.users_accounts (user_id,account_id,attempts) VALUES (?)',[data]);
        return res.status(200).send({message:"User was added"});
    }catch(error){
        return res.status(500).send({error:"Server error", message:'Server error: Sign up failed. Try again later.'})
    }
}
