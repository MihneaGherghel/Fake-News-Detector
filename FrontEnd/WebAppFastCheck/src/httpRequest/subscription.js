
export async function paySubscription(token){
    try{
        const response=await fetch('http://localhost:3000/create-checkout-session',{
            method:'POST',
            body: JSON.stringify({}),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
            }
        })
        const resData=await response.json()
        if(resData.url){
            window.location.href=resData.url
        }
    }catch(error){
        window.location.href='http://localhost:5173/serverError'
    }
}