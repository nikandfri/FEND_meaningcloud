function apiCall(event) {
    let form = document.querySelector("form")
    form.addEventListener("submit", event => {
        const input = form.elements.input.value
        event.preventDefault()
        console.log("input:", input)
        const url = getUrl(input)
        console.log("returning url in apiCall function:", url)
        fetch(url,{
            method: 'POST',
            body: 'data',
            mode: 'cors',
            headers: new Headers(),
            credentials: 'same-origin'
        }).then(response => response.json()).then(data => postServer(data));
    })   
}

const getUrl = (input) => {
    console.log("Inside of getURL", input)
    const model = "&model=general&lang=en"
    const apiKey = "4c86f19313711cbb6fc8c26d9c8eaf53&of=json&txt="
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
    const textEncoded = encodeURIComponent(input)
    const url = baseUrl + apiKey + textEncoded + model
    console.log("returning of url in getURL:", url)
    return url
}

const postServer = (data) => {
    console.log("Inside of PostServer:", data)
    fetch('http://localhost:8080/post', {
        headers: new Headers({'content-type': 'application/json'}),
        method: 'POST',
        body: data,
        mode: 'cors',
        credential: 'same-origin'
    })
        .then((response) => { return response.json()})
        .then((data) => {
            console.log("Response from the server!", data)
        })
}

/*const updateUI = (data) => {
    let results = document.getElementById('results')
    results.innerText(data)
}*/

export{ apiCall }