const express = require('express')
const router = express.Router()
const {createTodo,getAllTodo,getOneTodo,deleteTodo,updateTodo} = require('../controllers/todo')


router.post('/create',createTodo)
router.get('/get-all',getAllTodo)
router.post('/get-one',getOneTodo)

router.delete('/delete',deleteTodo)
router.put('/update',updateTodo)


module.exports = router