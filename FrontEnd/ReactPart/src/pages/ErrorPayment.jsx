import MessageInformation from "../components/Messages/MessagesInformation";

export default function Error(){
    return <div class="bg-white py-24 px-48">
        <MessageInformation title={"Ooops!"} importantMessage="Something went wrong!" message={"The payment was not successful. Please check the information and kindly make the payment again. Thank you!"} onClickButton={() => window.location.href = "/subscription"} messageButton={"Try again!"} />
    </div>
}