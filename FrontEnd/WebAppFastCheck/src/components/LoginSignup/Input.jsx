export default function Input({id,label,img,type}){
    return (
        <div>
            <label class="text-lg" for={id}>{label}</label>
            <div class="flex mt-3 ml-2 mb-3">
                <img class="w-6 h-6 mr-3 text-gray-200" src={img}/>
                <input id={id} name={id} type={type} class="w-full outline-none text-lg"></input>
            </div>
            <hr class="bg-black h-[0.1rem]"/>
        </div>
    )
}