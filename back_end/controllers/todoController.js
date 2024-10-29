const todoModels = require('../models/todoModels');
const Todo = require('../models/todoModels');

// Get all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos' });
  }
};

// Create a new todo
exports.createTodo = async (req, res) => {
  const { title, description, time, date } = req.body;
  try {
    const newTodo = new Todo({
      title,
      description,
      time,
      date
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    res.status(500).json({ message: 'Error creating todo' });
  }
};

// delete
exports.todolistDelete=async(req,res)=>{
  const idno = req.params.id;
  console.log(idno)
  await Todo.deleteOne({_id:idno})
  res.json("data is deleted")

}
// 

// //fetch data
// const getTodolist=async(req,res)=>{
//   const todolist=await todoModels.find()
//   todolist.length>0?res.json(todolist):res.json([])
// }
// module.exports = getTodolist