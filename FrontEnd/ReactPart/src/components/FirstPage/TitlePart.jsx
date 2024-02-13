import { Link } from "react-router-dom"

export default function TitlePart(){
    return (
        <div class="bg-[url('/backgroundImage.webp')] bg-cover bg-center h-[35rem] text-center p-[13rem] ">
            <h1 class="text-6xl text-white font-bold">This Is Fast check</h1>
            <p class="text-2xl text-white mt-3 mb-5">Verify the news now</p>
            <Link to="/formLinkPage" class="bg-myRed px-4 py-2 font-bold rounded hover:text-lg">Verify news</Link>
        </div>
    )
}