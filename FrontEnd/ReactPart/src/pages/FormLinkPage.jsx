import MainNavigation from '../components/Header/MainNavigation'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'
import Form from '../components/FormAI/Form'
import Response from '../components/FormAI/Response'
import {urlFakeNewsPercentages} from '../httpRequest/postNews'

export default function FormTextTitlePage(){
    const [error,setError]=useState({ URL:false})
    const [response,setResponse]=useState(-1);
    const [serverError,setServerError]=useState("")
    async function handleReset(){
        setResponse(-1)
    }

    async function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const url=formData.get("URL");
        if(!url.trim()){
            setError({URL:true})
            return;
        }
        setError({URL:false})
        const value=await urlFakeNewsPercentages(url)
        if (typeof value=="string"){
            setResponse(0)
            setServerError(value)
        }
        else{
            setResponse(value)
            setServerError("")
        }
    }
    const formData=[
        {type:"text", id:"URL", class:"h-12"}
    ]
    return (
        <main class="relative h-[800px] mb-9 px-1">
            <div class="absolute top-28 left-48 w-2/6">
                <h1 class="text-4xl font-bold mb-3">Verify your news</h1>
                <p class="text-lg text-myRed"> Enter the URL of the news you want to identify as 
                    false or true. Afterward, our  AI model will process the news' title 
                    and text and provide a response.
                </p>
                <Form handleSubmit={handleSubmit} handleReset={handleReset} formData={formData} error={error}/>
                {serverError=="" && response>=0 && <Response response={response}/>}
                {serverError!="" && <p class="text-center text-red-500">{serverError}</p>}
            </div>
            <div class="absolute bg-[url('./aiHumanoid.jpg')] bg-cover w-4/12 h-3/4 left-[800px] top-24 rounded-tl-xl rounded-bl-xl "></div>
        </main>
    )
}