// This prints "My First JSDOM!"
// console.log(dom.window.document.getElementById("main").textContent);
const api = require("./function.js")
const data = {
    "data": [
        "AGREEMENT",
        "OBJECTIVE",
        "100",
        "NONIRONIC",
        "N+"
    ],
}

beforeEach(() => {
    document.body.innerHTML = 
    '<div>' +
    '<div id="results1">1</div>' +
    '<div id="results2">2</div>' +
    '<div id="results3">3</div>' +
    '<div id="results4">4</div>' +
    '<div id="results5">5</div>' +
    '</div>';
})

test('it should update the DOM with the received data', () => {
    console.log("Inside of test:", data)
    
    api.update(data)
    expect(document.getElementById('results1').textContent).toEqual('OBJECTIVE')
    expect(document.getElementById('results2').textContent).toEqual('AGREEMENT')
    expect(document.getElementById('results3').textContent).toEqual('100')
    expect(document.getElementById('results4').textContent).toEqual('NONIRONIC')
    expect(document.getElementById('results5').textContent).toEqual('N+')
    
})