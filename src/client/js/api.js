
function apiCall(event) {
    console.log(process.env.DB_HOST);
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
        }).then(response => response.json()).then(data => postServer(data)).then(response => update(response))
    })   
}

const getUrl = (input) => {
    console.log("Inside of getURL", input)
    const model = "&model=general&lang=en"
    const apiKey = process.env.S3_API
    console.log("API key consoled:", apiKey)
    const baseUrl = "https://api.meaningcloud.com/sentiment-2.1?key="
    const textEncoded = input
    const url = baseUrl + apiKey + textEncoded + model
    console.log("returning of url in getURL:", url)
    return url
}

const postServer = (data) => {
    console.log("Inside of PostServer:", data)
    const data1 = data.score_tag
    const data2 = {"text": data1}
    console.log("MyJson", typeof data1)
    fetch('http://localhost:8081/post', {
        headers: {'Content-Type': 'application/json'},
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        cache: 'no-cache',
        method: 'POST',
        body: JSON.stringify(data2),
        mode: 'cors',
    })
        .then(response => response.json())
        .then(function(data) {
            return update(data)})
        .catch((error) => {
            console.error('Error:', error);
          })
}

const update = (response) => {
    const texty = response.text
    const wrapper = document.getElementById('results')
    wrapper.textContent = texty
}



/*const updateUI = (data) => {
    let results = document.getElementById('results')
    results.innerText(data)
}*/

export{ apiCall }
export { getUrl }
export { update }
