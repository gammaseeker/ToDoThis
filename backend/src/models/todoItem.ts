import mongoose, { mongo } from "mongoose";

interface ITodoItem {
    title: string;
    description: string;
    status: boolean; // True = completed, False = not completed
}

interface TodoItemInterface extends mongoose.Model<TodoDoc>{
    build(attr: ITodoItem): TodoDoc
}

interface TodoDoc extends mongoose.Document {
    title: string;
    description: string;
    status: boolean; // True = completed, False = not completed
}

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});

todoItemSchema.statics.build = (attr: ITodoItem) => {
    return new TodoItem(attr); 
}

const TodoItem = mongoose.model<any, TodoItemInterface>('TodoItem', todoItemSchema);

export { TodoItem }