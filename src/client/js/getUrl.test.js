"Use strict"
const apiKey = process.env.S3_API
const api = require("./function.js")

test('it should get the right url', ()=>{
    const sentence = "https://www.bild.de/politik/kolumnen/kolumne/kommentar-zum-infektionsschutzgesetz-ein-geschenk-fuer-extremisten-76148478.bild.html"
    const result = []
    result.push(api.getUrl(sentence))
    expect(result).toStrictEqual(['https://api.meaningcloud.com/sentiment-2.1?key='+apiKey+'https://www.bild.de/politik/kolumnen/kolumne/kommentar-zum-infektionsschutzgesetz-ein-geschenk-fuer-extremisten-76148478.bild.html&model=general&lang=en'])
})

