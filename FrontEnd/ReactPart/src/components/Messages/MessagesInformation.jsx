export default function MessageInformation({title,message,onClickButton,messageButton,importantMessage}){
    return <div class="bg-myWhite rounded-md px-60 py-14 text-center h-[30rem]">
        <h1 class="text-8xl text-myRed">{title}</h1>
        <p class="mt-28 text-xl font-extrabold">{importantMessage}</p>
        <p class="mt-5">{message}</p>
        <button  class="mt-5 text-myWhite bg-myRed px-4 py-3 rounded-3xl hover:text-lg w-[12rem] text-center" onClick={onClickButton}>{messageButton}</button>
    </div>
}