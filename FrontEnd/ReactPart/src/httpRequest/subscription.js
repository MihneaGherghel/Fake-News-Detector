import { getAuthToken } from "../util/auth";
export async function paySubscription(){
    const token=getAuthToken();
    const response=await fetch('http://localhost:3000/create-checkout-session',{
        method:'POST',
        body: JSON.stringify({
            
        }),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        }
    })
    const resData=await response.json()
    if(resData.url){
        window.location.href=resData.url
    }
}