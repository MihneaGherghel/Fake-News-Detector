import { useState, useContext } from 'react'
import Form from '../components/FormAI/Form'
import {titleAndTextFakeNewsPercentages} from '../httpRequest/postNews'
import Response from '../components/FormAI/Response'
import {LoginContext} from '../store/login'

export default function FormTextTitlePage(){
    const [error,setError]=useState({ title:false, text:false})
    const [response,setResponse]=useState(-1);
    const [aiGenerated,setAIGenerated]=useState("")
    const [serverError,setServerError]=useState("")
    const loginContext=useContext(LoginContext)
    async function handleReset(){
        setResponse(-1)
    }

    async function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const title=formData.get('title');
        const text=formData.get('text');
        if(!title.trim() && !text.trim()){
            setError({title:true, text:true})
            return;
        }
        if(!title.trim()){
            setError({title:true,text:false})
            return;
        }
        if(!text.trim()){
            setError({title:false,text:true})
            return;
        }
        setError({title:false,text:false})
        let [value,aiGeneratedText]=await titleAndTextFakeNewsPercentages(title,text,loginContext.token)
        if (typeof value=="string"){
            setResponse(0)
            setServerError(value)
        }
        else{
            value=Math.round(value)
            setResponse(value)
            setAIGenerated(aiGeneratedText)
            setServerError("")
        }
    }

    const formData=[
        {type:"text", id:"title", class:"h-12"},
        {type:"textarea", id:"text", class:""}
    ]
    return (
        <main class="relative h-screen mb-96 max-sm:mb-10 px-1">
            <div class="w-2/6 h-5/6 left-48 max-sm:w-5/6 max-sm:left-5 absolute top-28">
                <h1 class="text-4xl font-bold mb-3">Verify your news</h1>
                <p class="text-lg text-myRed"> Enter the title and text of the news you want to identify as 
                    false or not. Afterward, our  AI model will process the news' title 
                    and text and provide a response.
                </p>
                <Form handleSubmit={handleSubmit} handleReset={handleReset} formData={formData} error={error}/>
                 {!error.title && !error.text && serverError=="" && response>=0 && <Response response={response} aiGenerated={aiGenerated}/>}
                 {!error.title && !error.text && serverError!="" && <p class="text-center text-red-500">{serverError}</p>}
            </div>
            {window.innerWidth>640 &&<div class="absolute bg-[url('./aiHumanoid.jpg')] bg-cover w-4/12 h-[55rem] left-[800px] top-24 rounded-tl-xl rounded-bl-xl "></div>}
        </main>
    )
}