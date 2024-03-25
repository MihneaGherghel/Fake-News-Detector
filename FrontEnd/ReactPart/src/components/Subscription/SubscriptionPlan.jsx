import { Link } from "react-router-dom"

export default function SubscriptionPlan({name,price,description,onClickFunction}){
    return (
        <div class="h-[28rem] bg-myWhite shadow-lg px-12 py-12 rounded-md relative">
            <h1 class="text-xl font-bold text-center mb-1">{name}</h1>
            <hr class="border-myRed border-2 w-1/3 mx-auto rounded-md"></hr>
            <p class="text-4xl font-bold text-center mt-3">{price}</p>
            <ul class="mt-5 list-disc">
                { description.map((description)=>(
                    <li class="mb-2">{description}</li>
                ))}
            </ul>
            <button onClick={onClickFunction} class="absolute bottom-5 text-myWhite bg-myRed px-4 py-2 rounded hover:text-lg w-2/3 text-center">Get Started</button>
        </div>
    )
}