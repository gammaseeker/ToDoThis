import { Request, Response } from 'express';
import { TodoItem } from '../models/todoItem';

async function getAllTodoItems(req: Request, res: Response) {
    const todo = await TodoItem.find({});
    return res.status(200).send(todo);
}

async function createTodoItem(req: Request, res: Response) {
    const { title, description } = req.body;
    
    const todo = TodoItem.build({ title, description });
    await todo.save();
    return res.status(201).send(todo);
}

export { getAllTodoItems, createTodoItem}