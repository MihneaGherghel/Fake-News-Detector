import SubscriptionPlan from "../components/Subscription/UnpayPlans"
import SubscriptionButton from "../components/Subscription/SubscriptionPlan"
import { useContext} from "react"
import { LoginContext } from "../store/login";
import { subscriptionData } from "../util/subscription"
import { verifyToken } from "../util/login";

export default function Subscription(){
    const loginContext =useContext(LoginContext)
    const subscriptionPlan=subscriptionData(loginContext.token)
    let styleText="text-3xl"
    let styleContainer="mx-32"
    if(window.innerWidth<=640){
        styleText="text-xl"
        styleContainer="flex-col mx-20"
    }
    return (
        <div class="py-20">
            <h1 class="text-3xl max-sm:text-xl text-center font-bold text-myRed" >About our subscription plans</h1>
            <ul class="mx-32 max-sm:mx-20 max-sm:flex-col flex justify-around mt-16">
                {subscriptionPlan.map((plan)=>(
                    <li key={plan.name}><SubscriptionPlan name={plan.name} price={plan.price} description={plan.description} navigation_link={plan.navigation_link} /></li>
                ))}
                {verifyToken(loginContext.token)==1 && 
                    <li>
                        <SubscriptionButton name="Premium" price="$ 5.99/mo" description={["check 100.000 news","check using text and title","check using URL"]}/>
                    </li>
                }
            </ul>
        </div>
    )
}