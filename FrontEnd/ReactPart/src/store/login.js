import { createContext } from "react";

export const LoginContext=createContext({
    isLogin:0,
    login:()=>{},
    logout:()=>{}
})

