export function NewsBox({title,prediction}){
    return (
        <div className="text-center w-48 h-32 bg-myRed rounded flex flex-col justify-center px-2 py-2">
            <p><span class="font-bold">Title</span>: {title}</p>
            <p><span class="font-bold">Prediction result</span>: {prediction}</p>
        </div>
    )
}