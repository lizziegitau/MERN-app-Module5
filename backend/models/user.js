const mongoose = require('mongoose')

//create a new schema
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  password: { type: String, required: true },
})

//create a model
const User = mongoose.model('User', userSchema)

module.exports = User
