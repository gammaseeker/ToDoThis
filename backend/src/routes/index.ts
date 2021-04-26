import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', function (req, res) {
res.send('Hello World!');
});

router.get('/api/get_all_todo_items', (req: Request, res: Response) => {
    return res.send('get api working');
});

router.post('/api/create_todo_item', (req: Request, res: Response) => {
    return res.send('post api working');
});

export { router as todoRouter }