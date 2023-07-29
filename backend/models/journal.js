const mongoose = require('mongoose')

//create a new schema
const journalSchema = new mongoose.Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
})

//create a model
const Journal = mongoose.model('Journal', journalSchema)

module.exports = Journal
