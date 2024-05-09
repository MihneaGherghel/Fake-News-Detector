const db=require('../../data/database');
module.exports.saveNews=async(email,data)=>{
    const title=data.title
    const text=data.text
    const prediction=data.prediction_rounded
    if(text=="" && title=="" && text==null && title==null && text==undefined && title==undefined){
        console.log("Something went wrong. One news was not save.")
    }
    try{
        const users = await db.query('SELECT * FROM fake_news.users WHERE users.email=(?)',[[email]]);
        await db.query('INSERT INTO fake_news.news (user_id,title,text,prediction) VALUES (?)',[[users[0][0].id,title,text,prediction]]);
    }catch(error){
        console.log("Something went wrong. One news was not save.")
    }
}