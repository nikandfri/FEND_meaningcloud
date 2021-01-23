var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')

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
    res.send(body)
    //const data = req.body
    //res.send(data.sentence_list.score_tag)
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
