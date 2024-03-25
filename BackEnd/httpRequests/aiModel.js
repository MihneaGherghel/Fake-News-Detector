

module.exports.requestTextandTitle=async (text,title)=>{
    const response=await fetch("http://127.0.0.1:8000/fakeNewsUsingTitleAndText", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title:title,text:text})
    })
    const data=await response.json();
    return data
}

module.exports.requestURL=async (url)=>{
    const response=await fetch("http://127.0.0.1:8000/fakeNewsUsingURL", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({url:url})
    })
    const data=await response.json();
    return data
}