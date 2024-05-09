export default function MessageInformation({title,message,onClickButton,messageButton,importantMessage}){
    return <div class="px-60 py-14 max-sm:px-16 max-sm:py-16 max-sm:my-16 bg-myWhite ${containerStyle} rounded-md text-center h-[30rem]">
        <h1 class="text-8xl max-sm:text-7xl text-myRed">{title}</h1>
        <p class="mt-28 max-sm:mt-12 text-xl font-extrabold">{importantMessage}</p>
        <p class="mt-5">{message}</p>
        <button  class="mt-5 text-myWhite bg-myRed px-4 py-3 rounded-3xl hover:text-lg w-[12rem] text-center" onClick={onClickButton}>{messageButton}</button>
    </div>
}