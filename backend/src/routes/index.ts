import express, { Request, Response } from 'express';
import { getAllTodoItems, createTodoItem, completeTodoItem } from '../controllers/todoItem';

const router = express.Router();

router.get('/', function (req, res) {
res.send('Hello World!');
});

// --- GET ROUTES ---
router.get('/api/get_all_todo_items', getAllTodoItems);

// --- POST ROUTES ---
router.post('/api/create_todo_item', createTodoItem);
router.post('/api/complete_todo_item', completeTodoItem);

export { router as todoRouter }