const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide name'],
      maxlength: 50,
    },
    todoType: {
      type: String,
      required: [true, 'Please provide type'],
      maxlength: 100,
    },
    desc: {
        type: String,
        required: [true, 'Please provide description'],
        maxlength: 250,
      },
    status: {
      type: String,
      enum: ['New', 'In Process', 'Completed'],
      default: 'New',
    },
    // createdBy: {
    //   type: mongoose.Types.ObjectId,
    //   ref: 'User',
    //   required: [true, 'Please provide user'],
    // },
  },
  { timestamps: true }
)

module.exports = mongoose.model('Todo', TodoSchema)
