import MainNavigation from '../components/Header/MainNavigation'
import Footer from '../components/Footer/Footer'
import { useState } from 'react'
import Form from '../components/FormAI/Form'
import {titleAndTextFakeNewsPercentages} from '../httpRequest/postNews'
import Response from '../components/FormAI/Response'

export default function FormTextTitlePage(){
    const [error,setError]=useState({ title:false, text:false})
    const [response,setResponse]=useState(-1);
    const [serverError,setServerError]=useState("")

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
        const value=await titleAndTextFakeNewsPercentages(title,text)
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
        {type:"text", id:"title", class:"h-12"},
        {type:"textarea", id:"text", class:""}
    ]
    return (
        <main class="relative h-screen mb-96 px-1">
            <div class="absolute top-28 left-48 w-2/6">
                <h1 class="text-4xl font-bold mb-3">Verify your news</h1>
                <p class="text-lg text-myRed"> Enter the title and text of the news you want to identify as 
                    false or not. Afterward, our  AI model will process the news' title 
                    and text and provide a response.
                </p>
                <Form handleSubmit={handleSubmit} handleReset={handleReset} formData={formData} error={error}/>
                 {serverError=="" && response>=0 && <Response response={response}/>}
                 {serverError!="" && <p class="text-center text-red-500">{serverError}</p>}
            </div>
            <div class="absolute bg-[url('./aiHumanoid.jpg')] bg-cover w-4/12 h-[55rem] left-[800px] top-24 rounded-tl-xl rounded-bl-xl "></div>
        </main>
    )
}