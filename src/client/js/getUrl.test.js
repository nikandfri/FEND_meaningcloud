"Use strict"

const api = require("./api.js")

test('it should get the right url', ()=>{
    const sentence = "my cat is shit"
    const result = []
    result.push(api.getUrl(sentence))
    expect(result).toStrictEqual(["https://api.meaningcloud.com/sentiment-2.1?key="+process.env.S3_API+"my%20cat%20is%20shit&model=general&lang=en"])
})

