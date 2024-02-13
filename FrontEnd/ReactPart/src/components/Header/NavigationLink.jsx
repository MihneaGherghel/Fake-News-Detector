import { Link } from "react-router-dom"

export default function NavigationLink({children,link}){
    return (
        <li class="list-none"><Link class="px-8 hover:bg-myRed py-2 rounded" to={link}>{children}</Link></li>
    )
}