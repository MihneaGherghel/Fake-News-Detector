import { Link } from "react-router-dom"

export default function SubscriptionPlan({name,price,description,navigation_link}){
    return (
        <div class=" h-[28rem] px-12 max-sm:px-8 max-sm:h-[20rem] max-sm:mt-10 py-12 bg-myWhite shadow-lg rounded-md relative">
            <h1 class="text-xl font-bold text-center mb-1">{name}</h1>
            <hr class="border-myRed border-2 w-1/3 mx-auto rounded-md"></hr>
            <p class="text-4xl max-sm:text-2xl font-bold text-center mt-3">{price}</p>
            <ul class="mt-5 list-disc">
                { description.map((description)=>(
                    <li key={description} class="mb-2">{description}</li>
                ))}
            </ul>
            <Link to={navigation_link} class="max-sm:ml-5 absolute bottom-5 text-myWhite bg-myRed px-4 py-2 rounded hover:text-lg w-2/3 text-center">Get Started</Link>
        </div>
    )
}