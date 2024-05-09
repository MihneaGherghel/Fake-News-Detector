import { Link } from "react-router-dom"
import { paySubscription } from "../../httpRequest/subscription"
import { useContext } from "react"
import { LoginContext } from "../../store/login";

export default function SubscriptionPlan({name,price,description}){
    const token=useContext(LoginContext).token
    async function onClick(){
        await paySubscription(token)
    }
    return (
        <div class="px-12 h-[28rem] max-sm:h-[20rem] max-sm:px-8 max-sm:mt-10 bg-myWhite shadow-lg py-12 rounded-md relative">
            <h1 class="text-xl font-bold text-center mb-1">{name}</h1>
            <hr class="border-myRed border-2 w-1/3 mx-auto rounded-md"></hr>
            <p class="text-4xl max-sm:text-2xl font-bold text-center mt-3">{price}</p>
            <ul class="mt-5 list-disc">
                { description.map((description)=>(
                    <li class="mb-2">{description}</li>
                ))}
            </ul>
            <button onClick={onClick} class="max-sm:ml-5 absolute bottom-5 text-myWhite bg-myRed px-4 py-2 rounded hover:text-lg w-2/3 text-center">Get Started</button>
        </div>
    )
}