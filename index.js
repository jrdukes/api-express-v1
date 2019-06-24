require('dotenv').config()
const express = require('express')
const app = express()
const catsDatabase = require('./data/cats.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Welcome to all the cats. Meow.')
})


app.get('/cats/:catId', (req,res) => {

  // Step 1: 


  //console.log(JSON.stringify(req, null, 2))

  // Did the client send a query stirng in the HTTP request? 
  // and is that query string called 'breed'? 
  // If so, then use afunction that filters for cats and breeds
  // if not, then use a function that only filters for cats. 

res
.status(200)
.send(
  catsDatabase.filter(
    req.query.breed
    ? item => item.type === 'cat' && item.breed === Response.query.breed
    : item => item.type === 'cat'
  )
)

app.get('.cats/:catId', (req,res) => {
 res.status(200).send(req.params)
})


  const filterCatsFn = req.query.breed
  ? item => item.type === 'cat' && item.breed === Response.query.breed
  : item => item.type === 'cat'
  res.status(200).send(catsDatabase.filter)

  let foundCats = []
  if (req.query && req.query.breed)
  // also works as (req.query.breed) 
  {
    foundCats = catsDatabase.filter(
      item => item.type === 'cat' && item.breed === req.query.breed 
    )
  } else {
    foundCats = catsDatabase.filter(item => item.type === 'cat')
  }

  res.status(200).send(foundCats)

app.get('./breeds', (req, res) =>
  res.status(200).send(catsDatabase.filter(item => item.type === 'breed')))
  }

 

  // const foundCats = catsDatabase.filter(item => item.type === 'cat')
  // res.status(200).send(req.query)

    //res.status(200).send(foundCats)

// })

app.listen(
  process.env.PORT || 5555,
  process.env.HOST || '127.0.0.1',

  () => console.log('Im up and listening on http://127.0.0.1:5555')
)

console.log(`The host name is: ${process.env.HOST}`)
