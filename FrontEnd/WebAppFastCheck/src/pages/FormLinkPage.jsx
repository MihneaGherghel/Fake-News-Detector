import { LoginContext } from '../store/login'
import { useState,useContext } from 'react'
import Form from '../components/FormAI/Form'
import Response from '../components/FormAI/Response'
import {urlFakeNewsPercentages} from '../httpRequest/postNews'


export default function FormTextTitlePage(){
    const [error,setError]=useState({ URL:false})
    const [response,setResponse]=useState(-1);
    const [serverError,setServerError]=useState("")
    const [aiGenerated,setAIGenerated]=useState("")
    const loginContext=useContext(LoginContext)
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
        const [value,aiGeneratedText]=await urlFakeNewsPercentages(url,loginContext.token)
        if (typeof value=="string"){
            setResponse(0)
            setServerError(value)
        }
        else{
            setResponse(value)
            setAIGenerated(aiGeneratedText)
            setServerError("")
        }
    }
    const formData=[
        {type:"text", id:"URL", class:"h-12"}
    ]
    return (
        <main class="h-[50rem] max-sm:h-[40rem] relative mb-9 px-1">
            <div class="w-2/6 left-48 h-5/6 max-sm:w-5/6 max-sm:left-10 absolute top-28">
                <h1 class="text-4xl font-bold mb-3">Verify your news</h1>
                <p class="text-lg text-myRed"> Enter the URL of the news you want to identify as 
                    false or true. Afterward, our  AI model will process the news' title 
                    and text and provide a response.
                </p>
                <Form handleSubmit={handleSubmit} handleReset={handleReset} formData={formData} error={error}/>
                {serverError=="" && response>=0 && <Response response={response} aiGenerated={aiGenerated}/>}
                {serverError!="" && <p class="text-center text-red-500">{serverError}</p>}
            </div>
            {window.innerWidth>640 &&<div class="absolute bg-[url('./aiHumanoid.jpg')] bg-cover w-4/12 h-3/4 left-[800px] top-24 rounded-tl-xl rounded-bl-xl "></div>}
        </main>
    )
}