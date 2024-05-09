export default function Input({input,error}){
    const classInput="w-full border-solid border-gray-300 border-2 rounded py-1 px-3 "+input.class
    let value=(
        <div class="mb-11">
            <label htmlFor={input.id} class="block text-lg font-bold mb-3">{input.id.toUpperCase()}</label>
            <input type={input.type} id={input.id} name={input.id} class={classInput}/>
            {error && <p class="text-red-700">The {input.id} input must not be empty!</p>}
        </div>
    )
    if(input.type=="textarea"){
        value=(
            <div class="mb-11">
                <label htmlFor={input.id} class="block text-lg font-bold mb-3">TEXT</label>
                <textarea id={input.id} name={input.id} class={classInput} rows="10"/>
                {error && <p class="text-red-700">The {input.id} input must not be empty!</p>}
            </div>
        )
    }
    
    return value;
}