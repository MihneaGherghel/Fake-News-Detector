const db=require('../data/database');

module.exports.detectFakeNewsUsingTestandTitle=async (req,res)=>{
  const title=req.body.title;
  const text=req.body.text;
  if(req.email){
    const users = await db.query('SELECT * FROM fake_news.users WHERE users.email=(?)',[[req.email]]);
    const users_accounts= await db.query('SELECT * FROM fake_news.users_accounts WHERE users_accounts.user_id=(?)',[[users[0][0].id]]);
    const accounts=await db.query('SELECT * FROM fake_news.accounts WHERE accounts.id=(?)',[[users_accounts[0][0].account_id]]);
    if(accounts[0][0].max_attempts<users_accounts[0][0].attempts){
      return res.json({message:"Your free trials expired. Plase buy a premium account."})
    }
    if(text.length>accounts[0][0].text_limit && accounts[0][0].id==3){
      return res.json({message:"Your text is too long. If you want to verify this news please buy a premium account."})
    }
    if(text.length>accounts[0][0].text_limit && accounts[0][0].id==2){
      return res.json({message:"Your text is too long."})
    }
    await db.query('UPDATE fake_news.users_accounts SET attempts = attempts + 1 WHERE users_accounts.id=(?)',[[users_accounts[0][0].id]]);
    res.status(200).json({value:40})
  }
  else{
    res.status(200).json({value:40})
  }
}

module.exports.detectFakeNewsUsingUrl=async (req,res)=>{
  const url=req.body.url;
  console.log(req.email)
  if(req.email){
    const users = await db.query('SELECT * FROM fake_news.users WHERE users.email=(?)',[[req.email]]);
    const users_accounts= await db.query('SELECT * FROM fake_news.users_accounts WHERE users_accounts.user_id=(?)',[[users[0][0].id]]);
    const accounts=await db.query('SELECT * FROM fake_news.accounts WHERE accounts.id=(?)',[[users_accounts[0][0].account_id]]);
    if(accounts[0][0].verify_using_url==false){
      return res.json({message:"You can't check a news using url if you have not a premium account."})
    }
    await db.query('UPDATE fake_news.users_accounts SET attempts = attempts + 1 WHERE users_accounts.id=(?)',[[users_accounts[0][0].id]]);
    res.status(200).json({value:80})
  }
  else{
    res.json({message:"You can't check a news using url if you are not authentificated."})
  }
}