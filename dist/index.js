"use strict";
//In this, we can create different objects of class
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const todoCollection_1 = require("./todoCollection");
//object declaration
let todos = [
    new todo_1.Todo(1, 'Go For Walk'),
    new todo_1.Todo(2, 'Have BreakFast'),
    new todo_1.Todo(3, 'Do code'),
    new todo_1.Todo(4, 'Go to Sleep', true)
];
let itemCollection = new todoCollection_1.TodoCollection('muneeb', todos);
//instance calling
// todos[0].printTask();
// todos[1].printTask();
// itemCollection.addTodo('Doing Code');
// itemCollection.getTodoByStatus()
// itemCollection.markComplete(1, true);
itemCollection.deleteComplete();
// itemCollection.addTodo('Doing code');
// itemCollection.taskDone(1);
