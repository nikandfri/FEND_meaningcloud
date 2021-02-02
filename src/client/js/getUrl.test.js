"Use strict"

const api = require("./api.js")

test('it should get the right url', ()=>{
    const sentence = "my cat is shit"
    const result = []
    result.push(api.getUrl(sentence))
    expect(result).toStrictEqual(["https://api.meaningcloud.com/sentiment-2.1?key=4c86f19313711cbb6fc8c26d9c8eaf53&of=json&txt=my%20cat%20is%20shit&model=general&lang=en"])
})

