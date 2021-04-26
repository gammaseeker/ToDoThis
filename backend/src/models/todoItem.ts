import mongoose, { mongo } from "mongoose";
import ITodoItem from "../interfaces/ITodoItem";

const TodoItem = new mongoose.Schema({

});

export default mongoose.model<ITodoItem & mongoose.Document>(
    "TodoItem",
    TodoItem
);