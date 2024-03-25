import { paySubscription } from "../httpRequest/subscription"
import SubscriptionPlan from "../components/Subscription/SubscriptionPlan"
import { useContext} from "react"
import { LoginContext } from "../store/login";
export default function Subscription(){
    const loginContext =useContext(LoginContext)
    const unauthentificatedFunction=()=>{
        window.location.href='http://localhost:5173/formTextTitlePage'
    }
    const authentificatedFunction=()=>{
        window.location.href='http://localhost:5173/login'
    }
    const subscriptionFunction=async ()=>{
        if(loginContext.isLogin==0){
            window.location.href='http://localhost:5173/login'
        }
        else{
            await paySubscription();
        }
    }
    const subscriptionPlan=[
        {
            name:"Unauthentificated",
            price:"Free",
            description:[
                "check 5 news only",
                "check using text and title",
            ],
            navigation_link:unauthentificatedFunction
        },
        {
            name:"Authentificated",
            price:"Free",
            description:[
                "check 10 news only",
                "check using text and title",
            ],
            navigation_link:authentificatedFunction
        },
        {
            name:"Premium",
            price:"$ 5.99/mo",
            description:[
                "check 100.000 news",
                "check using text and title",
                "check using URL"
            ],
            navigation_link:subscriptionFunction
        }
    ]
    return (
        <div class="py-20">
            <h1 class="text-center font-bold text-3xl text-myRed" >About our subscription plans</h1>
            <ul class="flex justify-around mt-16 mx-32">
                {subscriptionPlan.map((plan)=>(
                    <li><SubscriptionPlan name={plan.name} price={plan.price} description={plan.description} onClickFunction={plan.navigation_link} /></li>
                ))}
            </ul>
        </div>
    )
}