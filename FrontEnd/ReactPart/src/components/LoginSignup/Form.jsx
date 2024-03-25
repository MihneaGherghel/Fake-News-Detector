import { Link } from "react-router-dom"

import Input from "./Input"

export default function Form({inputs,title,otherAction,otherButton,toOtherButton,handleSubmit,submitResponse}){
    let generalMessage;
    if(submitResponse){
        if(submitResponse.error){
            generalMessage=<p class="text-center text-red-500">{submitResponse.message}</p>
            if(submitResponse.mistakes){
                for(let i=0;i<inputs.length;i++){
                    inputs[i].error=submitResponse.mistakes[inputs[i].id]
                }   
            }
        }
        else{
            generalMessage=<p class="text-center text-green-500">{submitResponse.message}</p>
        }
    }
    return <div class="text-center bg-gradient-to-b from-myWhite to-myRed pt-20 pb-20">
        <div class="bg-white w-1/3 mx-auto p-9 rounded-lg pl-10 pr-10">
            <h1 class="text-3xl font-bold mb-10">{title}</h1>
            <form class="text-left mb-10" onSubmit={handleSubmit}>
                {inputs.map((input)=>(
                    <div class="mb-10">
                        <Input id={input.id} label={input.label} img={input.img} type={input.type}/>
                        {input.error && <p class="text-red-500">{input.error}</p>}
                    </div>
                    
                ))}
                <button class="bg-gradient-to-b from-myWhite to-myRed w-full h-10 ml-8s rounded-3xl text-lg text-white hover:from-myRed hover:to-myRed hover:text-xl">{title}</button>
                {generalMessage}
            </form>
            <p class="mb-5">Or {otherAction} Using</p>
            <Link class="font-bold hover:underline" to={toOtherButton}>{otherButton}</Link>
        </div>
    </div>
}