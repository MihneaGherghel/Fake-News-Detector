import { createContext } from "react";
import { useState,useEffect } from "react";
import { useContext } from "react";
import { LoginContext } from "./login";

export const PageContext=createContext({
    page:'Login',
    setLogin:()=>{},
    setTextAndTitle:()=>{},
    setURL:()=>{}
})

export const PageContextProvider = ({children})=>{
    const [page,setPage]=useState('Login')
    const loginContext=useContext(LoginContext)
    useEffect(()=>{
        if(loginContext.token!=''){
            if(page==='Login'){
                setPage('TextAndTitle')
            }
        }
        else{
            setPage('Login')
        }
    },[loginContext.token])
    const handleLogin =()=>{
        setPage('Login')
    }

    const handleTextAndTitle = ()=>{
        setPage('TextAndTitle')
    }

    const handleURL = ()=>{
        setPage('URL')
    }
    return(
        <PageContext.Provider value={{
            page,
            setLogin:handleLogin,
            setTextAndTitle:handleTextAndTitle,
            setURL:handleURL
        }}>
            {children}
        </PageContext.Provider>
    )
}