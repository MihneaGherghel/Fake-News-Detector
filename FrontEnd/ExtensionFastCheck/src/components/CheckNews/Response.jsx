

export default function Response({procentage}) {
    return (
        <div className="bg-myRed text-center rounded-lg pt-3 pb-3 pl-1 pr-1 mt-5 w-3/4">
            <p className="mt-2 text-white">Based on the obtained data, our AI model considers the news to be false with a probability of <span className="font-extrabold">{procentage}%</span></p>
        </div>
    )
}