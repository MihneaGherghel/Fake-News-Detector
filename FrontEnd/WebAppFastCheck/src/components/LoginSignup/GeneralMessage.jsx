export default function GeneralMessage({submitResponse}){
    let generalMessage
    if(submitResponse){
        if(submitResponse.error){
            generalMessage=<p class="text-center text-red-500">{submitResponse.message}</p>
        }
        else{
            generalMessage=<p class="text-center text-green-500">{submitResponse.message}</p>
        }
    }
    return generalMessage
}