import express from 'express';

const router = express.Router();

router.get('/api/get_all_todo_items', (req, res) => {
    return res.send('get api working');
});
router.post('/api/create_todo_item', (req, res) => {
    return res.send('post api working');
});

export { router as todoRouter }