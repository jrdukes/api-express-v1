require('dotenv').config()
const express = require('express')
const app = express()
const catsDatabase = require('./data/cats.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Welcome to all the cats. Meow.')
})

app.get('/cats', (req,res) => {
  console.log(JSON.stringify(req, nul, 2))

  const foundCats = catsDatabase.filter(item => item.type === 'cat')
  res.status(200).send(foundCats)


})

app.listen(
  process.env.PORT || 5555,
  process.env.HOST || '127.0.0.1',

  () => console.log('Im up and listening on http://127.0.0.1:5555')
)

console.log(`The host name is: ${process.env.HOST}`)
