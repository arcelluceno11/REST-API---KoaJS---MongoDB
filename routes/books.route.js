const Router = require('@koa/router');
const {storeBook, getAllBooks, getBook, updateBook, deleteBook} = require('../db/books.model');

const router = new Router({
    prefix:'/books'
})

//localhost:8080/books GET
router.get('/', async ctx =>{
    ctx.body = await getAllBooks();
})

//localhost:8080/books POST
router.post('/', async ctx =>{
    let book = ctx.request.body;
    book = await storeBook(book);
    ctx.response.status = 200;
    ctx.body = book;
})

//localhost:8080/books/{id} GET
router.get('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await getBook(id);
})

//localhost:8080/books/{id} DELETE
router.delete('/:id', async ctx =>{
    const id = ctx.params.id;
    ctx.body = await deleteBook(id);
})

//localhost:8080/books/{id} PUT/PATCH
router.put('/:id', async ctx =>{
    const id = ctx.params.id;
    let book = ctx.request.body;
    book = updateBook(id, book);
    ctx.response.status = 200;
    ctx.body = book;
})

module.exports = router;