import { useEffect,useContext,useState } from "react"
import { getProfile } from "../httpRequest/profile"
import { LoginContext } from "../store/login"
import { SubscriptionProfile } from "../components/Profile/SubscriptionProfile"
import {UnpaidProfile} from "../components/Profile/UnpaidProfile"
import { NewsBox } from "../components/Profile/NewsBox"
import { NoHistory } from "../components/Profile/NoHistory"

export default function ProfilePage() {
    const [userInformation,setUserInformation]=useState("")
    const loginContext=useContext(LoginContext)
    useEffect(()=>{
        async function getData(){
            const data=await getProfile(loginContext.token)
            setUserInformation(data)
        }
        getData()
    },[loginContext.token])
    if(userInformation!="" && userInformation.message==undefined)
    {
        return (
            <div class="flex relative gap-32 max-sm:block my-10">
                {userInformation.account.name=="Full access" && <SubscriptionProfile name={userInformation.user.name} email={userInformation.user.email} date={userInformation.users_accounts.expire_date}/>}
                {userInformation.account.name!="Full access" && <UnpaidProfile name={userInformation.user.name} email={userInformation.user.email}/>}
                {userInformation.news.length>0 && <div className="my-10 flex ${styleContainerNews gap-20 flex-wrap items-center max-sm:gap-10 max-sm:items-center max-sm:flex-col">
                    {userInformation.news.map((oneNews)=>{
                        return <NewsBox title={oneNews.title} prediction={oneNews.prediction}/>
                    })}
                </div>}
                {userInformation.news.length==0 && <NoHistory/>}
            </div>
        )
    }
}