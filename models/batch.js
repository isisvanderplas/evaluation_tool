const mongoose = require('../config/database')
const { Schema } = mongoose

const batchSchema = new Schema({
  id: { type: Number, required: true },
  amountOfStudents: { type: Number, required: true },
})

module.exports = mongoose.model('batch', batchSchema)
