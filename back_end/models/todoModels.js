const mongoose = require('mongoose');

// Define To-Do schema
const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  time: String,
  date: String,
});

// Export the model
module.exports = mongoose.model('Todo', todoSchema);
