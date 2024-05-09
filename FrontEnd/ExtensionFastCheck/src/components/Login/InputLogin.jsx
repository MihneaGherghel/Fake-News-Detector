

export default function InputLogin({id,label}) {
    return (
        <div className="mt-10">
            <label htmlFor={id} className=" text-gray-600 block">{label}</label>
            <input type={id} id={id} name={id} className="border-solid border-b-myRed border-b-2 text-sm py-1 px-3 rounded-none bg-myWhite outline-none w-[90%]"/>
        </div>
    )
}