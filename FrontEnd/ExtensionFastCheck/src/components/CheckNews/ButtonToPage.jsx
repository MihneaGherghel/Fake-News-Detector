
export default function ButtonToPage({text,onClick}){
    return (
        <button className="underline mt-1 hover:text-myRed" onClick={onClick}>{text}</button>
    )
}