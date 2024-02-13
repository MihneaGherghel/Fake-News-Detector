const bcrypt=require("bcrypt");

const validator=require("validator")

const verifyEmail=(email)=>{
    if(validator.isEmail(email)==0){
        return "Email is invalid. Please enter a valid address"
    }
    return ""
}

const verifyPassword=(password)=>{
    if(validator.isStrongPassword(password)==0){
        return "Password is invalid. A password must contain more than 8 characters, 1 symbol, 1 number, oneupper case character and one lowercase character."
    }
    return ""
}

const confirmPasswordEqualPassword=(password,confirmPassword)=>{
    if(password!==confirmPassword){
        return "The password and conformation of it have to be equal."
    }
    return ""
}

module.exports.validationSignUp=(email,password,confirmPassword)=>{
    let isError=0
    const valEmail=verifyEmail(email);
    const valPassword=verifyPassword(password);
    const valConfirmPassowrd=confirmPasswordEqualPassword(password,confirmPassword)
    if(valEmail!="" || valPassword!="" || valConfirmPassowrd!=""){
        isError=1
    }
    return {
        error:isError,
        email:valEmail,
        password:valPassword,
        confirmPassword:valConfirmPassowrd
    }
}

module.exports.hashPassword=async (password)=>{
    const salt=await bcrypt.genSalt()
    const hashPassword=await bcrypt.hash(password,salt)
    return hashPassword
}