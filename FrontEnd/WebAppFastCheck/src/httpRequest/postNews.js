
export async function urlFakeNewsPercentages(url,token){
    try{
        const response=await fetch('http://localhost:3000/url',{
            method:'POST',
            body: JSON.stringify({url:url}),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
            }
        })
        const resData= await response.json()
        if(resData.error==="Server error"){
            window.location.href='http://localhost:5173/serverError'
        }
        if(resData.message){
            return resData.message
        }
        return [resData.value.prediction_rounded,resData.value.generatedByAI]
    }catch(error){
        window.location.href='http://localhost:5173/serverError'
    }
}

export async function titleAndTextFakeNewsPercentages(title,text,token){
    try{
        const response=await fetch('http://localhost:3000/textAndTitle',{
            method:'POST',
            body: JSON.stringify({title:title,text:text}),
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer '+token
            }
        })
        const resData= await response.json()
        if(resData.error==="Server error"){
            window.location.href='http://localhost:5173/serverError'
        }
        if(resData.message){
            return resData.message
        }
        return [resData.value.prediction_rounded,resData.value.generatedByAI]
    }catch(error){
        window.location.href='http://localhost:5173/serverError'
    }
}