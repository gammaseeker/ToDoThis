import express from 'express'; 
import mongoose from 'mongoose';
import { json } from 'body-parser';
import { todoRouter } from './routes/index';

// Create a new express app instance
const app: express.Application = express();

app.use(json());
app.use(todoRouter);

mongoose.connect('mongodb://localhost:27017/todo', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log('connected to db');
});

app.listen(3001, function () {
console.log('App is listening on port 3001!');
});