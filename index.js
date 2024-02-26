
const express = require('express')
const cors = require('cors')
const app = express()


app.use(cors())

const temes = require('./beatles.json')



app.get('/', function (req, res) {
  res.send('API dels Beatles. Escriu /tema per un tema aleatori, o /temes per veure\'ls tots')
})

app.get('/tema', (req, res) => {
    let x = Math.floor(Math.random() * 25)+1;
    res.json(temes.find(e => e.id==x))
})

app.get('/temes', (req, res) => {
    res.json(temes)
})

app.listen(3000, function () {
  console.log('http://localhost:3000 obert!')
})
