import NavigationLink from "./NavigationLink"
import { LoginContext } from "../../store/login";
import { useContext, useState} from "react"
import { verifyToken } from "../../util/login";
import { dataLoginNavbar, dataUserNavbar } from "../../util/navbar";
import HamburgerButton  from "./HamburgerButton";

function isOpenInitial(){
    if(window.innerWidth<=640){
        return {type:"phone",stare:"hidden",style:"hidden"}
    }
    return {type:"pc",stare:"block",style:"flex"
    }
}

export default function MainNavigation(){
    const [stateMenu, setStateMenu] = useState(isOpenInitial());
    const loginContext=useContext(LoginContext)
    const toggleMenu = () => {
        if(stateMenu.stare==="block"){
            setStateMenu({ type:"phone",stare:"hidden",style:"hidden"})
        }
        else{
            setStateMenu({type:'phone', stare:"block",style:"fixed top-0 left-0 w-screen h-screen bg-white z-40 text-center text-xl pt-32"})
        }
    }
    function logoutFunction(){
        loginContext.logout()
        if(stateMenu.type=="phone"){
            toggleMenu()
        }
        window.location.href = '/'
    }
    let links=[];
    if(verifyToken(loginContext.token)==0){
        links=dataUserNavbar()
    }
    else{
        links=dataLoginNavbar()
    }
    return (
        <header class="bg-myWhite px-8 flex justify-around max-sm:justify-center">
            <img src='/logo.png' alt="Check Fast" class='w-[8rem]'/>
            <HamburgerButton toggleMenu={toggleMenu}/>
            <nav class={`${stateMenu.style} items-center`}>
                {links.map((link)=>(
                    <NavigationLink link={link.link} device={stateMenu.type} toggleMenu={toggleMenu}>{link.name}</NavigationLink>
                ))}
                { verifyToken(loginContext.token)==1 && <li class="list-none mt-5"><button class="px-8 hover:bg-myRed py-2 rounded" onClick={()=>logoutFunction()}>Logout</button></li>}
                { stateMenu.type=="pc" && verifyToken(loginContext.token)==1 && <li class="list-none px-2 py-1 border-2 rounded-full bg-myRed text-myWhite font-bold text-xl ml-4 mt-5">{loginContext.letter}</li>}
            </nav>
        </header>
    )
}