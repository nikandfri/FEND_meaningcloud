// This prints "My First JSDOM!"
// console.log(dom.window.document.getElementById("main").textContent);
const api = require("./api.js")

beforeEach(() => {
    document.body.innerHTML = "<div id='results'>0</div>"
})

test('it should update the DOM with the received data', () => {
    const data = {text:"text"}
    const results = document.getElementById("results")
    expect(results.textContent).toBe("0")
    api.update(data)
    expect(results.textContent).toBe("text")
})