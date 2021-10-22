const express = require('express')
const BookRouter = express.Router()
const Book = require("../models/Book")


BookRouter.get('/', async (req, res) => {
    const books = await Book.find()
    console.log(books)
    res.json({status: 200, books})
})

BookRouter.get('/:id', (req, res) => {
    Book.findById(req.params.id, (err, book) => {
        if(err) throw err;
        res.json( {status: 200, book} )
    })
})

BookRouter.post('/', (req, res) => {
    Book.findOne({ ISBN: req.body.ISBN }, async (err, book) => { // 중복체크 
        if(err) throw err; 
        if(!book){ // 데이터베이스에서 해당 책을 조회하지 못한 경우
            const newBook = new Book(req.body); 
            await newBook.save().then( () => { 
                res.json({ status: 201, msg: 'new book created in db !', newBook}) 
            }) 
            
        }else{ // 생성하려는 책과 같은 ISBN번호가 이미 데이터베이스에 존재하는 경우 
            const msg = 'this book already exists in db !' 
            console.log(msg) 
            res.json({ status: 204, msg}) 
        } 
    }) 
})

BookRouter.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, book) => {
        if(err) throw err;
        res.json( {status: 204, msg: `book ${req.params.id} updated in db !`, book})
    })
})

BookRouter.delete('/:id', (req, res) => { 

    Book.findByIdAndRemove(req.params.id, (err, book) => {
        if(err) throw err;
        res.json( {status: 204, msg: `book ${req.params.id} removed in db !`})
    }) 
})





module.exports = BookRouter;

// /api/book