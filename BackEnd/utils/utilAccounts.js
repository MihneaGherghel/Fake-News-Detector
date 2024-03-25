const moment = require('moment');
module.exports.verificationPremiumTextAndTitle=(text,users,users_accounts,accounts)=>{
    if(text.length>accounts[0][0].text_limit){
      return{message:"Your text is too long."}
    }

    const today = moment();
    const subscriptionDate = moment(users_accounts[0][0].expire_date, 'YYYY-MM-DD');
    if(subscriptionDate.isBefore(today)){
        return {message:"Your subscription expired. Please buy a premium account."}
    }

    return {message:""}
}

module.exports.verificationAuthentificatedTextAndTitle=(text,users,users_accounts,accounts)=>{
    if(accounts[0][0].max_attempts<users_accounts[0][0].attempts){
      return {message:"Your free trials expired. Plase buy a premium account."}
    }
    if(text.length>accounts[0][0].text_limit){
      return{message:"Your text is too long. If you want to verify this news please buy a premium account."}
    }

    const today = moment();
    const subscriptionDate = moment(users_accounts[0][0].expire_date, 'YYYY-MM-DD');
    if(subscriptionDate.isBefore(today)){
        return {message:"Your subscription expired. Please buy a premium account."}
    }

    return {message:""}
}

module.exports.verificationURL=(url,users,users_accounts,accounts)=>{
    if(accounts[0][0].verify_using_url==false){
        return {message:"You can't check a news using url if you have not a premium account."}
    }
    if(url.length>500){
        return {message:"Your url is too long. If you want to verify this news please buy a premium account."}
    }
    return {message:""}
}