//In this, we can create different objects of class

import { Todo } from './todo';
import { TodoCollection } from './todoCollection';

//object declaration
let item : Todo = new Todo(1, "BreakFast", true);
let item2 : Todo = new Todo(2, "Work");

let itemCollection : TodoCollection = new TodoCollection();


//instance calling
item.printTask();
item2.printTask();

itemCollection.addTodo('Eating Lunch');
itemCollection.taskDone(1);
// itemCollection.printAll()
