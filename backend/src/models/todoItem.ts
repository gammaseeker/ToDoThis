import mongoose, { mongo } from "mongoose";

interface ITodoItem {
    title: string;
    description: string;
}

interface TodoItemInterface extends mongoose.Model<TodoDoc>{
    build(attr: ITodoItem): TodoDoc
}

interface TodoDoc extends mongoose.Document {
    title: string;
    description: string;
}

const todoItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

todoItemSchema.statics.build = (attr: ITodoItem) => {
    return new TodoItem(attr); 
}

const TodoItem = mongoose.model<any, TodoItemInterface>('TodoItem', todoItemSchema);

TodoItem.build({
    title: 'some title',
    description: 'asd'
});
export { TodoItem }