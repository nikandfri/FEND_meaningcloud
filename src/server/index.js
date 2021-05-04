var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
const { response } = require('express')
const root = path.join(__dirname + '../../../build')
const data = []

app.use(cors())

app.use(bodyParser.json())

app.use(express.static(root))

app.use(express.json())


console.log("Root directory is: ", root)

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
})

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
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})



    
      
    //axios.post(url).then(response => data.push(response.data.score_tag, response.data.agreement, response.data.subjectivity, response.data.confidence, response.data.irony)).then(data => res.write(data))
    //res.send(mockAPIRespo)
