const express = require('express');
const router = express.Router();
const { getTodos, createTodo } = require('../controllers/todoController');

// Define routes
router.get('/todos', getTodos);
router.post('/todos', createTodo);

module.exports = router;
