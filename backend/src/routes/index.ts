import express, { Request, Response } from 'express';
import { TodoItem } from '../models/todoItem';
import { getAllTodoItems, createTodoItem } from '../controllers/todoItem';

const router = express.Router();

router.get('/', function (req, res) {
res.send('Hello World!');
});

router.get('/api/get_all_todo_items', getAllTodoItems);

router.post('/api/create_todo_item', createTodoItem);

export { router as todoRouter }