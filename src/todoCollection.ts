//Collections of items (array)

import { Todo } from "./todo";

export class TodoCollection {

    //variable
    private nextId = 1;

    //constructor
    public constructor(public items: Todo[] = []){

    }

    //methods
    public addTodo(task:string):void{
        let item:Todo = new Todo(this.nextId, task, false);
        this.nextId++;
        this.items.push(item);
        item.printTask();
    }

    public taskDone(taskId:number):void{
        let item:Todo = this.items.find((item)=> item.taskId==taskId);        
        item.done = true;
        return item.printTask();

    }

    public printAll():void{
        this.items.forEach((item)=>item.printTask());
    }




}