import { getAuthToken } from "../util/auth"

export async function urlFakeNewsPercentages(url){
    const token=getAuthToken();
    const response=await fetch('http://localhost:3000/url',{
        method:'POST',
        body: JSON.stringify({url:url}),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        }
    })
    const resData= await response.json()
    if(resData.message){
        return resData.message
    }
    return resData.value
}

export async function titleAndTextFakeNewsPercentages(title,text){
    const token=getAuthToken();
    const response=await fetch('http://localhost:3000/textAndTitle',{
        method:'POST',
        body: JSON.stringify({title:title,text:text}),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        }
    })
    const resData= await response.json()
    if(resData.message){
        return resData.message
    }
    return resData.value
}