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
    return await response.json()
}

export async function login(email,password){
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
    const token=value.token
    localStorage.setItem('token',token)

    return value
}