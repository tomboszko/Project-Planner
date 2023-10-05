import {ComputeRemainingDays} from "./remainingDays.js";

class task {
    constructor(title, status, dueDate, description, id) {
        this.title = title;
        this.status = status;
        this.dueDate = dueDate;
        this.description = description;
        this.id = id;
        this.remainingDays = ComputeRemainingDays(dueDate);
    }
}

function GetTasks(){
    
    let tasks = [];

    for(let i = 0 ;i<localStorage.length;i++){

        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
        item.dueDate = new Date(item.dueDate);
        tasks.push(item);

    }
    
    return tasks;

}

export {GetTasks, task};