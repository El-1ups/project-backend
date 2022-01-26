const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Posts',
    required: true
  }
},
{
  timestamps: true
})

// childSchema, don't need to create a model
module.exports = commentSchema
