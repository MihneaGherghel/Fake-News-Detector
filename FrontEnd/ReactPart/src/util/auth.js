export function getAuthToken(){
    const token=localStorage.getItem('token')
    return token;
}

export function deleteAuthToken(){
    localStorage.removeItem("token")
}