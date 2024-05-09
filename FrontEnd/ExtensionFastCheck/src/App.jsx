import { useContext } from "react"
import { PageContext } from "./store/navigation"
import  {LoginContext} from "./store/login"
import Login from "./components/Login/Login"
import TitleAndText from "./components/CheckNews/TitleAndText"
import URL from "./components/CheckNews/URL"

function App() {
  const pageContext = useContext(PageContext)
  const loginContext=useContext(LoginContext)
  console.log(loginContext.token)
  return (
      <div className="w-[400px] h-[600px] bg-myWhite flex flex-col items-center mt-0">
        {pageContext.page==="Login" && <Login/>}
        {pageContext.page==="TextAndTitle" && <TitleAndText/>}
        {pageContext.page==="URL" && <URL/>}
      </div>
  )
}

export default App
