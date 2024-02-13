import Input from "./Input"


export default function Form({handleSubmit,formData,error,handleReset}){
    return (
        <form class="my-7" onSubmit={handleSubmit}>
            {formData.map((input)=>{
                return <Input input={input} error={error[input.id]}/>
            })}
            <div class="mt-7 flex">
                <button class="ml-28 px-7 py-2 border-solid border-2 border-black rounded hover:bg-black hover:text-white">Submit</button>
                <button class="ml-8 px-9 py-2 bg-myRed rounded hover:text-white" type="reset" onClick={handleReset}>Reset</button>
            </div>
        </form>
    )
}