
export default function Input({name}){
    return (
        <input type={name} id={name} name={name} placeholder={name} className=" mt-10 border-solid rounded border-2 border-myRed text-sm py-1 px-3 bg-myWhite outline-none w-[90%]"></input>
    )
}