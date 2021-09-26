//In this, we can create different objects of class

import { Todo } from './todo';
import { TodoCollection } from './todoCollection';
import * as inquirer from 'inquirer';

//object declaration
let todos: Todo[] = [
    new Todo(1, 'Go For Walk'),
    new Todo(2, 'Have BreakFast'),
    new Todo(3, 'Do code'),
    new Todo(4, 'Go to Sleep', true)
]
let itemCollection : TodoCollection = new TodoCollection('muneeb', todos);


//instance calling
// todos[0].printTask();
// todos[1].printTask();

// itemCollection.addTodo('Doing Code');
// itemCollection.getTodoByStatus()
// itemCollection.markComplete(1, true);
itemCollection.deleteComplete()
// itemCollection.addTodo('Doing code');
// itemCollection.taskDone(1);

