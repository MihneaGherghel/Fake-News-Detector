export default function Button({name,onClick}) {
    return (
        <button className="rounded-lg text-sm border-solid border-2 font-bold border-myRed bg-myRed mt-4 px-6 py-2 text-myWhite hover:bg-myWhite hover:text-myRed mx-5" onClick={onClick}>{name}</button>
    )
}