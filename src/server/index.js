// Setup empty JS object to act as endpoint for all routes
projectData = [];

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv');

dotenv.config();

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.json(mockAPIResponse);
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})




// GET route
app.get('/getInfo', getInfo);

function getInfo (request, response) {
  response.send(projectData);
};



// POST add city information
app.post('/addInfo', addInfo);



function addInfo(req,res){

    newCity = {
        latitude : req.body.latitude,
        longitude : req.body.longitude,
        country : req.body.country
    }

    projectData.push(newCity);
    res.send(projectData);
    console.log(projectData);
};