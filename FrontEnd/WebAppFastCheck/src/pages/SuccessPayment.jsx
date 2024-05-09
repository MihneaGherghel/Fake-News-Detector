import MessageInformation from "../components/Messages/MessagesInformation";

export default function Success(){
    return <div class="bg-white py-24 px-48">
        <MessageInformation title={"Congratulations!"} importantMessage={"Your payment was successful!"} message={"The payment has been successfully processed. Your subscription will be valid for 31 days starting from now. You can check 100,000 news using both the option to check the title and text, as well as based on the URL."} onClickButton={() => window.location.href = "/"} messageButton={"Back to home"} />
    </div>
}