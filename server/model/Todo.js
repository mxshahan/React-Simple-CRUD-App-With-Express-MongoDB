

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema({
    item:String
})

module.exports=mongoose.model('todo',Todo);