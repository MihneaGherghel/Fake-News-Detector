import NavigationLink from "./NavigationLink"
import { LoginContext } from "../../store/login";
import { useContext} from "react"
import { deleteAuthToken } from "../../util/auth";

export default function MainNavigation(){
    const loginContext=useContext(LoginContext)

    function onLogout(){
        deleteAuthToken()
        loginContext.logout()
    }
    let links;
    if(loginContext.isLogin==0){
        links=[
            {name:"Home",link:"/"},
            {name:"Login",link:"/login"},
            {name:"Sign up",link:"/signup"},
            {name:"Check using URL",link:"/formLinkPage"},
            {name:"Check using news",link:"/formTextTitlePage"},
        ]
    }
    else{
        links=[
            {name:"Home",link:"/"},
            {name:"Check using URL",link:"/formLinkPage"},
            {name:"Check using news",link:"/formTextTitlePage"},
        ]
    }
    return (
        <header class="bg-myWhite px-8 flex justify-between">
            <img src='/logo.png' alt="Check Fast" class='w-[8rem]'/>
            <nav class="flex items-center">
                {links.map((link)=>(
                    <NavigationLink link={link.link}>{link.name}</NavigationLink>
                ))}
                {loginContext.isLogin==1 && <li class="list-none"><button class="px-8 hover:bg-myRed py-2 rounded" onClick={onLogout}>Logout</button></li>}
            </nav>
        </header>
    )
}