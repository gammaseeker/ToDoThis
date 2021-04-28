import { Request, Response } from 'express';
import { TodoItem } from '../models/todoItem';

async function getAllTodoItems(req: Request, res: Response) {
    const todo = await TodoItem.find({});
    return res.status(200).send(todo);
}

async function createTodoItem(req: Request, res: Response) {
    /*
    const todo = TodoItem.build({
        title: 'some title',
        description: 'asd',
        status: false
    });
    */
    const { title, description } = req.body;
    
    const todo = TodoItem.build({ title, description, status: false });
    await todo.save();
    return res.status(201).send(todo);
}

function completeTodoItem(req: Request, res: Response) {
    const { id, title} = req.body;
    const query = {'_id': id, 'title': title};
    const update = TodoItem.findOneAndUpdate(query, {status: true}, {upsert: false}, function(err, doc) {
        if (err) return res.status(500);
        return res.status(200).send({});
    });
}

export { getAllTodoItems, createTodoItem, completeTodoItem }