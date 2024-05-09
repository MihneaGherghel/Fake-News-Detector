
export async function getProfile(token){
    try{
        const response=await fetch('http://localhost:3000/profile',{
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
            }
        })
        const resData= await response.json()
        if(resData.error==="Server error"){
            window.location.href='http://localhost:5173/serverError'
        }
        return resData
    }catch(error){
        window.location.href='http://localhost:5173/serverError'
    }
}