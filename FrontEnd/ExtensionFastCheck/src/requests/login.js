export async function login(email,password){
    try{
        const response=await fetch('http://localhost:3000/login',{
            method:'POST',
            body: JSON.stringify({
                email:email,
                password:password
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        const value=await response.json()
        return value
    }catch(error){
        console.log(error)
    }
}