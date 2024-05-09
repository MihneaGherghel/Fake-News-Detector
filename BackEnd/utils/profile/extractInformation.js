const db=require("../../data/database")

async function extractInformationUser(email){
    const users = await db.query('SELECT * FROM fake_news.users WHERE users.email=(?)',[[email]]);
    const users_accounts= await db.query('SELECT * FROM fake_news.users_accounts WHERE users_accounts.user_id=(?)',[[users[0][0].id]]);
    const accounts=await db.query('SELECT * FROM fake_news.accounts WHERE accounts.id=(?)',[[users_accounts[0][0].account_id]]);
    const news=await db.query('SELECT * FROM fake_news.news WHERE news.user_id=(?)',[[users[0][0].id]]);
    return {
        "user":users[0][0],
        "account":accounts[0][0],
        "news":news[0],
        "users_accounts":users_accounts[0][0]
    }
}

module.exports=extractInformationUser