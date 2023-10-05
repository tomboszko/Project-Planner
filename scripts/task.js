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

function GetAllKeys() {
    let keys = [];
    for (let i = 0; i < localStorage.length; i++) {
   
        keys.push(localStorage.key(i));

    }
    return keys;

}

//take an optional array of ids
function GetTasks(ids = null) {

    let tasks = [];

    let keys = ids !== null ? ids : GetAllKeys();

    for (let key of keys) {

        let item = GetTask(key);
        if (item !== null && item !== undefined) {
            tasks.push(item);
        }
    }

    return tasks;

}

function GetTask(id) {


    let item = JSON.parse(localStorage.getItem(id));

    if (item !== null && item !== undefined)
        item.dueDate = new Date(item.dueDate);

    return item;

}


function StoreTask(task) {

    localStorage.setItem(task.id, JSON.stringify(task));
}


function CreateJSTask(title, status, dueDate, description) {
    
    let keys = GetAllKeys();    

    //Local storage does not store item in specific order -_> new id =  find the max current id and increment it
    
    let lastId = keys.length === 0 ? -1 : keys.reduce((a,b)=>{
        return Math.max(a,b);
    },0);

    return new task(title, status, dueDate, description, ++lastId);
}


export {GetTasks, GetTask, StoreTask, CreateJSTask, task};