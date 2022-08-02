const express = require('express')
const router = express.Router()
const bookService = require('../services/book.service')

router.post('/addBook', async (req, res) => {
  await bookService.addBook(req.body)
})

router.get('/getBooks', async (req, res) => {
  const books = await bookService.getBooks()
  res.send(books)
})

router.get('/:id', async (req, res) => {
  const book = await bookService.getBook(req.params.id)
  res.send(book)
})

router.put('/:id', async (req, res) => {
  await bookService.editPrice(req.params.id, req.body.price)
})

router.delete('/:id', async (req, res) => {
  await bookService.deleteBook(req.params.id)
})

module.exports = router