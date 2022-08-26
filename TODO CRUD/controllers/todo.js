const Todo = require('../models/todo')

//Create a TODO
const createTodo = async (req,res) =>{
    try {
        const create = await Todo.create(req.body)
        res.status(200).json({create,isError:"N"});
    } catch (error) {
        res.json({message:error.message,isError:"Y"})
    }
}

//Get List of All Todo
const getAllTodo = async (req,res) => {
    const allTodo = await Todo.find().sort('createAt');
    res.status(200).json({allTodo,count:allTodo.length,isError:"N"})
}


//Get details of single Todo By Id
const getOneTodo = async(req,res) => {
    try {
        const getTodo = await Todo.findById({_id:req.body.todoId});
        if(getTodo){
            res.status(200).json({getTodo,isError:"N"})
        }else{
            res.status(200).json({message:'Invalid Todo Id',isError:"Y"})
        }
    } catch (error) {
        res.status(200).json({message:'Invalid Todo Id',isError:"Y"})
    }    
}


//Delete a todo by id
const deleteTodo = async (req,res) => {
    try {
        const getAndDelete = await Todo.findByIdAndRemove({_id:req.body.todoId})
        if(!getAndDelete){
            return res.status(200).json({message:'Invalid Todo Id',isError:"Y"})
        }
        res.status(200).json({message:"Deleted",isError:"N"})
    } catch (error) {
        res.status(200).json({message:'Invalid Todo Id',isError:"Y"})
    }
}


//Update detais of one todo by id
const updateTodo = async (req,res) => {
    try {
        const updateTodo = await Todo.findByIdAndUpdate(req.body._id,req.body)
        return res.status(200).json({message:'Updated',isError:"N"})
    } catch (error) {
        return res.status(200).json({message:'Invalid Todo',isError:"Y"})
    }
}

module.exports = {
    createTodo,getAllTodo
    ,getOneTodo,deleteTodo,updateTodo
}
    