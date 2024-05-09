import { useContext, useState } from "react"

import Button from "../Button";
import Header from "../Header";
import ButtonToPage from "./ButtonToPage";
import Input from "./InputCheck";
import Response from "./Response";
import { PageContext } from "../../store/navigation";
import { LoginContext } from "../../store/login";
import {urlFakeNewsPercentages} from "../../requests/url"



export default function URL() {
    const [response, setResponse] = useState('')
    const pageContext = useContext(PageContext)
    const loginContext=useContext(LoginContext)
    const handleToPage = () => {
        pageContext.setTextAndTitle()
    }

    const handleLogout = async (event) => {
        event.preventDefault();
        await loginContext.handleLogout();
    }

    const handleSubmitForm = async (event)=> {
        event.preventDefault();
        const formData = new FormData(event.target);
        const url = formData.get('URL');
        console.log(url)
        const procentage=await urlFakeNewsPercentages(url,loginContext.token)
        setResponse(procentage)
    }
    return (
        <>
            <Header title={"Verify your news"} subtitle={"Enter the URL of the news you want to check."}/>
            <form onSubmit={handleSubmitForm}>
                <Input name="URL"/>
                <div className="flex justify-center">
                    <Button name="Check"/>
                    <Button name="Logout" onClick={handleLogout}/>
                </div>
            </form>
            {response!='' && !isNaN(response) &&<Response procentage={response}/>}
            {response !='' && isNaN(response) && <p class="text-center text-red-500">{response}</p>}
            <ButtonToPage text="Check your news using text and title" onClick={handleToPage}/>
        </>
    )
}