
export async function urlFakeNewsPercentages(url,token){
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
    return resData.value.prediction_rounded
}