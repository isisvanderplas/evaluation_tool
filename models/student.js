const mongoose = require('../config/database')
const { Schema } = mongoose

const studentSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  photo: { type: String, required: false },
  historyOfColors: { type: Object, required: false }
  currentColor: { type: String, required: true }
})

module.exports = mongoose.model('students', studentSchema)
