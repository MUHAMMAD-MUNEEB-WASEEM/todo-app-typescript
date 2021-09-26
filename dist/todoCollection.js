"use strict";
//Collections of items (array)
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoCollection = void 0;
const todo_1 = require("./todo");
class TodoCollection {
    //constructor
    constructor(items = []) {
        this.items = items;
        //variable
        this.nextId = 1;
    }
    //methods
    addTodo(task) {
        let item = new todo_1.Todo(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
        item.printTask();
    }
    taskDone(taskId) {
        let item = this.items.find((item) => item.taskId == taskId);
        item.done = true;
        return item.printTask();
    }
    printAll() {
        this.items.forEach((item) => item.printTask());
    }
}
exports.TodoCollection = TodoCollection;
