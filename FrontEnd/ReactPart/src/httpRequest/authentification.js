export async function signUp(email,password, confirmPassword){
    const response=await fetch('http://localhost:3000/signup',{
        method:'POST',
        body: JSON.stringify({
            email:email,
            password:password,
            confirmPassword:confirmPassword
        }),
        headers:{
            'Content-Type':'application/json'
        }
    })
    const value=await response.json()
    return value
}

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
        if(value.error==="Server error"){
            window.location.href='http://localhost:5173/serverError'
        }
        const letter=value.letter
        const token=value.token
        localStorage.setItem('letter',letter)
        localStorage.setItem('token',token)
        return value
    }catch(error){
        window.location.href='http://localhost:5173/serverError'
    }
}