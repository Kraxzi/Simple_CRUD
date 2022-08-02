const pool = require('../database/dbConnection')

const bookService = {
  addBook: async book => {
    await pool.query(`INSERT INTO public.books (name, year, price, author) 
      VALUES ('${book.name}', ${book.year}, ${book.price}, '${book.author}')`)
  },

  getBooks: async () => {
    const books = (await pool.query('SELECT * FROM public.books')).rows
    return books
  },

  getBook: async id => {
    const book = (await pool.query(`SELECT * FROM public.books WHERE id = ${id}`)).rows
    return book
  },

  editPrice: async (id, price) => {
    await pool.query(`UPDATE public.books SET price=${price} WHERE id = ${id}`)
  },

  deleteBook: async id => {
    await pool.query(`DELETE FROM public.books WHERE id = ${id}`)
  }
}

module.exports = bookService