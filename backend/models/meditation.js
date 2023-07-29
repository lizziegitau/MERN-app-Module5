const mongoose = require('mongoose')

//create a new schema
const meditationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
})

//create a model
const Meditation = mongoose.model('Meditation', meditationSchema)

module.exports = Meditation
