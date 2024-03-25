const { verificationAuthentificatedTextAndTitle, verificationPremiumTextAndTitle, verificationURL } = require('./utilAccounts');
const db=require('../data/database');

module.exports.fakeNewsAuthenticatedTextandTitle=async (text,email)=>{
    print(0)
    const users = await db.query('SELECT * FROM fake_news.users WHERE users.email=(?)',[[email]]);
    const users_accounts= await db.query('SELECT * FROM fake_news.users_accounts WHERE users_accounts.user_id=(?)',[[users[0][0].id]]);
    const accounts=await db.query('SELECT * FROM fake_news.accounts WHERE accounts.id=(?)',[[users_accounts[0][0].account_id]]);
    await db.query('UPDATE fake_news.users_accounts SET attempts = attempts + 1 WHERE users_accounts.id=(?)',[[users_accounts[0][0].id]]);
    let result
    if(users_accounts[0][0].account_id==3){
      result=verificationAuthentificatedTextAndTitle(text,users,users_accounts,accounts)
    }
    else{
      result=verificationPremiumTextAndTitle(text,users,users_accounts,accounts)
    }
    return result
}

module.exports.fakeNewsAuthenticatedURL=async (url,email)=>{
    const users = await db.query('SELECT * FROM fake_news.users WHERE users.email=(?)',[[email]]);
    const users_accounts= await db.query('SELECT * FROM fake_news.users_accounts WHERE users_accounts.user_id=(?)',[[users[0][0].id]]);
    const accounts=await db.query('SELECT * FROM fake_news.accounts WHERE accounts.id=(?)',[[users_accounts[0][0].account_id]]);
    await db.query('UPDATE fake_news.users_accounts SET attempts = attempts + 1 WHERE users_accounts.id=(?)',[[users_accounts[0][0].id]]);
    const result=verificationURL(url,users,users_accounts,accounts);
    return result
}

