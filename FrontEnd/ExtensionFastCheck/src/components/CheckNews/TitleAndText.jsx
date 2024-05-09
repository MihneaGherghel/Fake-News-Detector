import { useContext,useState } from "react";

import Button from "../Button";
import Header from "../Header";
import Input from "./InputCheck";
import Response from "./Response";
import ButtonToPage from "./ButtonToPage";
import { titleAndTextFakeNewsPercentages } from "../../requests/textAndTitle";

import { PageContext } from "../../store/navigation";
import { LoginContext } from "../../store/login";



export default function TitleAndText() {
    const [response, setResponse] = useState('')
    const pageContext = useContext(PageContext)
    const loginContext=useContext(LoginContext)

    const handleToPage = () => {
        pageContext.setURL()
    }

    const handleLogout = (event) => {
        event.preventDefault();
        loginContext.logout()
    }

    const handleSubmitForm =async (event)=> {
        event.preventDefault();
        const formData = new FormData(event.target);
        const title = formData.get('Title');
        const text = formData.get('text');
        const procentage=await titleAndTextFakeNewsPercentages(title,text,loginContext.token)
        setResponse(procentage)
    }
    return (
        <>
            <Header title={"Verify your news"} subtitle={"Enter the text and title of the news you want to check."}/>
            <form onSubmit={handleSubmitForm}>
                <Input name="Title"/>
                <textarea rows={3} name="text" id="text" className=" mt-6 border-solid rounded border-2 border-myRed text-sm py-1 px-3 bg-myWhite outline-none w-[90%]" placeholder="Text"/>
                <div className="flex justify-center">
                    <Button name="Check"/>
                    <Button name="Logout" onClick={handleLogout}/>
                </div>
            </form>
            {response!='' && !isNaN(response) &&<Response procentage={response}/>}
            {response !='' && isNaN(response) && <p class="text-center text-red-500">{response}</p>}
            <ButtonToPage text="Check your news using url" onClick={handleToPage}/>
        </>
    )
}