const books = require('./index').db('Library').collection('books');

const bookID = require('mongodb').ObjectId;

//store
const storeBook = async ({bookName, bookClassification, bookAuthor, borrowedDate}) => {
    return await books.insertOne({bookName, bookClassification, bookAuthor, borrowedDate});
}

//get all books
const getAllBooks = async () => {
    return await books.find().toArray();
}

//get book by ID
const getBook = async id => {
    return await books.findOne({
        id: bookID(id)
    });
}

//update book by id
const updateBook = async (id, {bookName, bookClassification, bookAuthor, borrowedDate}) => {
    return await books.replaceOne({_id:bookID(id)}, {bookName, bookClassification, bookAuthor, borrowedDate});
}

//delete book by id
const deleteBook = async (id) => {
    return await books.deleteOne({_id:bookID(id)});
}

module.exports = {storeBook, getAllBooks, getBook, updateBook, deleteBook};