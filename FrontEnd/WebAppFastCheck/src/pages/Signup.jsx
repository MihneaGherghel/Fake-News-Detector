import Form from "../components/LoginSignup/Form"
import { signUp } from "../httpRequest/authentification";
import { useState,useContext } from "react";
import { LoginContext } from "../store/login";
import { signupInput } from "../util/login";

export default function Signup(){
    const [signupResponse,setSignupResponse]=useState({})
    const loginContext=useContext(LoginContext)
    async function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const name=formData.get('name');
        const email=formData.get('email');
        const password=formData.get('password');
        const confirmPassword=formData.get('confirmPassword')
        const value=await loginContext.signup(name,email,password,confirmPassword)
        setSignupResponse(value)
    }
    const inputs=signupInput()
    return (
        <Form inputs={inputs} title={"Sign up"} otherAction={"Login"} otherButton={"LOGIN"} toOtherButton={"/login"} handleSubmit={handleSubmit} submitResponse={signupResponse}/>
    )
}