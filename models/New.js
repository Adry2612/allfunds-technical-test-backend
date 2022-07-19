const mongoose = require('mongoose')
const Schema = mongoose.Schema

let projectSchema = Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    date:{
        type: Date,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    archivedDate: Date
})

module.exports = mongoose.model('New', projectSchema)