const express = require('express')
const categories = require('./Categories.json')
const news = require('./news.json')

const app = express()
const port = 5000
var cors = require('cors')

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/news', (req, res) => {
  res.send(news)
})

app.get('/news/:id', (req, res) => {
  let catNews = news.filter(news => news.category_id === req.params.id)
  res.send(catNews)
})

app.get('/newsById/:id', (req, res) => {
  let catNewsById = news.filter(news => news._id === req.params.id)
  res.send(catNewsById)
})

app.get('/news-categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})