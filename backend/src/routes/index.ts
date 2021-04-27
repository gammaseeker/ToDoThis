import express, { Request, Response } from 'express';
import { TodoItem } from '../models/todoItem';

const router = express.Router();

router.get('/', function (req, res) {
res.send('Hello World!');
});

router.get('/api/get_all_todo_items', async (req: Request, res: Response) => {
    //TODO extract this logic to a controller
    const todo = await TodoItem.find({});
    return res.status(200).send(todo);
});

router.post('/api/create_todo_item', async (req: Request, res: Response) => {
    //TODO extract this logic to a controller
    const { title, description } = req.body;
    
    const todo = TodoItem.build({ title, description });
    await todo.save();
    return res.status(201).send(todo);
});

export { router as todoRouter }