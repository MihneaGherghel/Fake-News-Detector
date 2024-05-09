import { useContext, useState } from "react"

import Button from "../Button"
import Header from "../Header"
import InputLogin from "./InputLogin"
import { LoginContext } from "../../store/login"

function generalMessage(response) {
    if(response!==''){
        if(response.error){
            return <p class="text-center text-red-500">{response.message}</p>
        }
        else{
            return <p class="text-center text-green-500">{response.message}</p>
        }
    }
    return <p></p>
}

export default function Login() {
    const [response,setResponse]=useState('')
    const loginContext=useContext(LoginContext)
    const handleLogin = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        const email=formData.get('email')
        const password=formData.get('password')
        const resp=await loginContext.login(email,password)
        setResponse(resp)
    }
    const message=generalMessage(response)
    return (
        <>
            <Header title={"Welcome back!"} subtitle={"Please login to your account."}></Header>
            <form className="mt-5 mx-10 w-[85%] mb-10" onSubmit={handleLogin}>
                <InputLogin id="email" label="Email"/>
                <InputLogin id="password" label="Password"/>
                <div className="flex flex-col items-center">
                    <Button name="Login"/>
                </div>
                {message}
            </form>
            <p>Don&apos;t have an account yet?</p>
            <p>Visit our website and make one.</p>
        </>
    )
}