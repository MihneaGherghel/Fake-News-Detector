export function verifyToken(token) {
    return token !== undefined && token !== null && token !== '';
}

export function loginInput(){
    const inputs=[
        {id:"email",label:"Email",img:"./email.svg",type:"email"},
        {id:"password",label:"Password",img:"./password.svg",type:"password"}
    ]
    return inputs
}

export function signupInput(){
    const input=[
        {id:"name",label:"Name",img:"./name.svg",type:"text"},
        {id:"email",label:"Email",img:"./email.svg",type:"email"},
        {id:"password",label:"Password",img:"./password.svg",type:"password"},
        {id:"confirmPassword",label:"Confirm Password",img:"./password.svg",type:"password"},
    ]
    return input
}