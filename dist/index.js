"use strict";
//In this, we can create different objects of class
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const todoCollection_1 = require("./todoCollection");
//object declaration
let item = new todo_1.Todo(1, "BreakFast", true);
let item2 = new todo_1.Todo(2, "Work");
let itemCollection = new todoCollection_1.TodoCollection();
//instance calling
item.printTask();
item2.printTask();
itemCollection.addTodo('Eating Lunch');
itemCollection.taskDone(1);
// itemCollection.printAll()
