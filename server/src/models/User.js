const mongoose = require('mongoose')
const book = require('./Book')

const userSchema = mongoose.Schema({        // 스키마 정의
    name : { type: String, required: true, trim: true },
    age : { type: Number, required: true},
    email : {type : String, required: true, trim: true},
    books :  {type :[book]}
})

