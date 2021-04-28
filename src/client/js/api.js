import axios from "axios"
import {getUrl, update} from './function.js'

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
            axios.post('http://localhost:8083/post', data).then(response => update(response))
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








/*const updateUI = (data) => {
    let results = document.getElementById('results')
    results.innerText(data)
}*/

export{ apiCall }
export { getUrl }
export { update }
