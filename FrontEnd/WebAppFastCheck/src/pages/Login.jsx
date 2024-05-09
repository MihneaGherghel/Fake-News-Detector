import Form from "../components/LoginSignup/Form"
import { useState } from "react";
import { LoginContext } from "../store/login";
import { useContext} from "react"
import { loginInput } from "../util/login";

export default function Login(){
    const loginContext=useContext(LoginContext)
    const [loginResponse,setLoginResponse]=useState({})
    async function handleSubmit(event){
        event.preventDefault()
        const formData=new FormData(event.target)
        const email=formData.get('email');
        const password=formData.get('password');
        const value=await loginContext.login(email,password)
        setLoginResponse(value)
    }
    const inputs=loginInput()
    return (
        <Form inputs={inputs} title={"Login"} otherAction={"Sign up"} otherButton={"SIGN UP"} handleSubmit={handleSubmit} toOtherButton={"/signup"} submitResponse={loginResponse}/>
    )
}