/**
 * Represents a todo list item.
 */

interface ITodoItem {
    title: string;
    description: string;
    status: boolean; // True = completed, False = not completed
}

export default ITodoItem;