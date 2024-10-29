const express = require('express');
const router = express.Router();
const { getTodos, createTodo,todolistDelete } = require('../controllers/todoController');

// Define routes
router.get('/todos', getTodos);
router.post('/todos', createTodo);
router.route("/todos/:id").delete(todolistDelete)


module.exports = router;
