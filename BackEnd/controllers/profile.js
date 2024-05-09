const extractInformationUser=require('../utils/profile/extractInformation')

module.exports.getProfile=async (req,res)=>{
    const email=req.email
    try{
        const data=await extractInformationUser(email)
        return res.status(200).json(data)
    }catch(error){
        return res.status(500).json({error:"Server error", message:'Server error: Something went wrong. Try again later.'})
    }
}