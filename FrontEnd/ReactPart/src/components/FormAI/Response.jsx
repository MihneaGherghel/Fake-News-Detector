export default function Response({response}){
    const classPercentages=`bg-myRed h-3.5 w-${response.toString()} rounded-full`
    return (
        <div class="bg-myWhite text-center rounded-lg pt-3 pb-3 pl-1 pr-1 mt-10">
            <h2 class="text-2xl text-myRed font-bold">Result</h2>
            <p class="mt-2 text-lg font-bold">Based on the obtained data, our AI model considers the news to be false with a probability of {response}%</p>
            <div class=" mt-2 w-full bg-gray-200 rounded-full h-3.5 dark:bg-gray-700">
                <div class={classPercentages}></div>
            </div>
        </div>
    )
}