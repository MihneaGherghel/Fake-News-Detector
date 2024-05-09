import { createContext } from "react";
import { useState,useEffect } from "react";
import { login } from "../requests/login";
import { ContainerWithChildren } from "postcss/lib/container";

export const LoginContext=createContext({
    token:'',
    login:()=>{},
    logout:()=>{}
})

export const LoginContextProvider = ({children})=>{
    const [token,setToken]=useState('')
    useEffect(async ()=>{
        //await handleLogout()
        chrome.storage.local.get(['token'],(result)=>{
            if(result.token && result.token !== undefined && result.token !== null){
                setToken(result.token)
            }
        })
    },[])

    const handleLogin = async (email,password)=>{
        try{
            const value=await login(email,password);
            if(value.token!==undefined && value.token!==null){
                setToken(value.token)
                await chrome.storage.local.set({'token':value.token})
                setTimeout(function() {
                    chrome.storage.local.remove('token', function() {
                        setToken('')
                    });
                }, 50 * 60 * 1000)
            }
            return value
        }catch(error){
            console.log(error)
        }
    }

    const handleLogout = async ()=>{
        await chrome.storage.local.remove(['token'])
        setToken('');
    }
    return(
        <LoginContext.Provider value={{
            token,
            login:handleLogin,
            logout:handleLogout
        }}>
            {children}
        </LoginContext.Provider>
    )
}


