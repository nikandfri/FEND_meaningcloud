import axios from "axios";

function apiCall(event) {
    console.log(process.env.DB_HOST);
    let form = document.querySelector("form")
    form.addEventListener("submit", event => {
        const input = form.elements.input.value
        event.preventDefault()
        console.log("input:", input)
        if (isURL(input) == true) {
            const url = getUrl(input)
            const data = [url]
            console.log("returning url in apiCall function:", url)
            axios.post('http://localhost:8081/post', data).then(response => update(response))
        } else {
            alert("No string bro!")
        }      
    })   
}

function isURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return pattern.test(str);
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



const update = (response) => {
    console.log("Inside of Update", response.data)
    const textSubjectivity = response.data[1]
    const textAgreement = response.data[0]
    const textConfidence = response.data[2]
    const textIrony = response.data[3]
    const textScoreTag = response.data[4]


    const subjectivity = document.getElementById('results1')
    const agreement = document.getElementById('results2')
    const confidence = document.getElementById('results3')
    const irony = document.getElementById('results4')
    const scoreTag = document.getElementById('results5')

    subjectivity.textContent = textSubjectivity
    agreement.textContent = textAgreement
    confidence.textContent = textConfidence
    irony.textContent = textIrony
    scoreTag.textContent = textScoreTag


}



/*const updateUI = (data) => {
    let results = document.getElementById('results')
    results.innerText(data)
}*/

export{ apiCall }
export { getUrl }
export { update }
