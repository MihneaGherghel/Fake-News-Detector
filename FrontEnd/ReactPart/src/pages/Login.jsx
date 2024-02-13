import Form from "../components/LoginSignup/Form"
import { login } from "../httpRequest/authentification";
import { useState } from "react";
import { LoginContext } from "../store/login";
import { useContext} from "react"

export default function Login(){
    const loginContext=useContext(LoginContext)
    const [loginResponse,setLoginResponse]=useState({})
    async function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const email=formData.get('email');
        const password=formData.get('password');
        const value=await login(email,password)
        if(!value.error){
            loginContext.login()
        }
        setLoginResponse(value)
    }
    const inputs=[
        {id:"email",label:"Email",img:"./email.svg",type:"email"},
        {id:"password",label:"Password",img:"./password.svg",type:"password"}
    ]
    return (
        <Form inputs={inputs} title={"Login"} otherAction={"Sign up"} otherButton={"SIGN UP"} handleSubmit={handleSubmit} toOtherButton={"/signup"} submitResponse={loginResponse}/>
    )
}