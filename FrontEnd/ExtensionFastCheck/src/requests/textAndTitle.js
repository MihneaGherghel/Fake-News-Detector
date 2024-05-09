export async function titleAndTextFakeNewsPercentages(title,text,token){
    const response=await fetch('http://localhost:3000/textAndTitle',{
        method:'POST',
        body: JSON.stringify({title:title,text:text}),
        headers:{
            'Content-Type':'application/json',
            'Authorization':'Bearer '+token
        }
    })
    const resData= await response.json()
    console.log(resData)
    if(resData.message){
        return resData.message
    }
    return resData.value.prediction_rounded
}