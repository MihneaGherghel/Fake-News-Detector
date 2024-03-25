import MessageInformation from "../components/Messages/MessagesInformation";

export default function ServerError(){
    return <div class="bg-white py-24 px-48">
        <MessageInformation title={"Ooops!"} importantMessage="Something went wrong!" message={"Server error: Something went wrong. Try again later. Thank you!"} onClickButton={() => window.location.href = "/"} messageButton={"Try again!"} />
    </div>
}