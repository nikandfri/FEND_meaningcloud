var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const { response } = require('express')
const url = 'https://api.meaningcloud.com/sentiment-2.1?key=4c86f19313711cbb6fc8c26d9c8eaf53&of=json&url=https://www.bild.de/politik/kolumnen/kolumne/kommentar-zum-infektionsschutzgesetz-ein-geschenk-fuer-extremisten-76148478.bild.html&model=general&lang=en'
const data = []

app.use(cors())

app.use(bodyParser.json())

app.use(express.static('../../build'))

app.use(express.json())


console.log(__dirname)

/*app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
})*/

app.post('/post', (req, res)=> {
    const body = req.body
    console.log("logging from server:", body)
      
    async function asyncFunction (url) {
        const response = await axios.post(url[0])
        const agreement = await response.data.agreement
        const subjectivity = await response.data.subjectivity
        const confidence = await response.data.confidence
        const irony = await response.data.irony
        const scoreTag = await response.data.score_tag
        //console.log(agreement, subjectivity, confidence, irony, scoreTag)
        const data = [agreement, subjectivity, confidence, irony, scoreTag]
        console.log(data)
        res.send(data)
    } 

    asyncFunction(body)
    // res.send(body)
    //const data = req.body
    //res.send(data.sentence_list.score_tag)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.get('/test', function (req, res) {
    res.send("This is my Get page")
    })
    
      
    //axios.post(url).then(response => data.push(response.data.score_tag, response.data.agreement, response.data.subjectivity, response.data.confidence, response.data.irony)).then(data => res.write(data))
    //res.send(mockAPIRespo)
