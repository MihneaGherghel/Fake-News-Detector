import { createContext } from "react";
import { login,signUp } from "../httpRequest/authentification";
import { useEffect, useState } from "react";

export const LoginContext=createContext({
    token:'',
    letter:'',
    login:()=>{},
    signup:()=>{},
    logout:()=>{}
})

export const LoginContextProvider = ({children})=>{
    const [token,setToken]=useState('')
    const [letter,setLetter]=useState('')
    useEffect(()=>{
        const oldToken = localStorage.getItem('token')
        const oldLetter = localStorage.getItem('letter')
        if(oldToken!=='' && oldToken!== undefined && oldToken!== null){
            setToken(oldToken)
            setLetter(oldLetter)
        }
        console.log(token)
    },[])

    const handleSignUp = async (name,email,password,confirmPassword)=>{
        try{
            const value=await signUp(name,email,password,confirmPassword);
            return value
        }catch(error){
            console.log(error)
        }
    }

    const handleLogin = async (email,password)=>{
        try{
            const value=await login(email,password);
            if(value.token!==undefined && value.token!==null){
                setToken(value.token)
                setLetter(value.letter)
                localStorage.setItem('token',value.token)
                localStorage.setItem('letter',value.letter)
                setTimeout(()=>{
                    setToken('')
                    localStorage.removeItem('token')
                    localStorage.removeItem('letter')
                }, 1000*50*60)
                window.location.href='http://localhost:5173/profile'
            }  
            return value
        }catch(error){
            console.log(error)
        }
    }

    const handleLogout = async ()=>{
        localStorage.removeItem('token')
        setToken('');
        setLetter('');
        localStorage.removeItem('letter')
        window.location.href='http://localhost:5173/'
    }
    return(
        <LoginContext.Provider value={{
            letter,
            token,
            signup:handleSignUp,
            login:handleLogin,
            logout:handleLogout
        }}>
            {children}
        </LoginContext.Provider>
    )
}

