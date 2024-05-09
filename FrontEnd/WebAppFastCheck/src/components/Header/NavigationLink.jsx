import { Link } from "react-router-dom"

export default function NavigationLink({children,link,toggleMenu,device}){
    function onClick(){
        if(device==="phone"){
            toggleMenu()
        }
    }
    return (
        <li class="list-none mt-5"><Link class="px-8 hover:bg-myRed py-2 rounded" to={link} onClick={onClick}>{children}</Link></li>
    )
}