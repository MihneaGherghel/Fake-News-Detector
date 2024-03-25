import Form from "../components/LoginSignup/Form"
import { signUp } from "../httpRequest/authentification";
import { useState } from "react";

export default function Signup(){
    const [signupResponse,setSignupResponse]=useState({})
    async function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const email=formData.get('email');
        const password=formData.get('password');
        const confirmPassword=formData.get('confirmPassword')
        const value=await signUp(email,password,confirmPassword)
        setSignupResponse(value)
    }
    const inputs=[
        {id:"email",label:"email",img:"./email.svg",type:"email"},
        {id:"password",label:"Password",img:"./password.svg",type:"password"},
        {id:"confirmPassword",label:"Confirm Password",img:"./password.svg",type:"password"},
    ]
    return (
        <Form inputs={inputs} title={"Sign up"} otherAction={"Login"} otherButton={"LOGIN"} toOtherButton={"/login"} handleSubmit={handleSubmit} submitResponse={signupResponse}/>
    )
}