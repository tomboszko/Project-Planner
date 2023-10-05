import {ComputeRemainingDays} from "./remainingDays.js";

class task {
    constructor(title, status, dueDate, description, id) {
        this.title = title;
        this.status = status;
        this.dueDate = dueDate;
        this.description = description;
        this.id = id;
        this.remainingDays = ComputeRemainingDays(dueDate);
        this.type = "task";
    }
}

function GetAllTasksKeys() {
    let keys = [];
    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
        if (isParsableToTask(localStorage.getItem(key)))
            keys.push(key);

    }
    return keys;

}


//take an optional array of ids
function GetTasks(ids = null) {

    let tasks = [];

    let tasksKeys = ids !== null ? ids : GetAllTasksKeys();

    for (let key of tasksKeys) {

        let item = GetTask(key);
        if (item !== null && item !== undefined) {
            tasks.push(item);
        }
    }

    return tasks;

}

function GetTask(id) {


    let item = localStorage.getItem(id);

    //retrieve item from storage only is task object
    if (isJsonObject(item)) {
        let parsedItem = JSON.parse(item);
        if (isTaskObject(parsedItem)) {
            parsedItem.dueDate = new Date(parsedItem.dueDate);
            parsedItem = new task(parsedItem.title, parsedItem.status, parsedItem.dueDate, parsedItem.description, parsedItem.id);
            return parsedItem;
        }
    }

}


function StoreTask(task) {

    localStorage.setItem(task.id, JSON.stringify(task));
}


function CreateJSTask(title, status, dueDate, description) {

    let keys = GetAllTasksKeys();

    //Local storage does not store item in specific order -_> new id =  find the max current id and increment it

    let lastId = keys.length === 0 ? -1 : keys.reduce((a, b) => {
        return Math.max(a, b);
    }, 0);

    return new task(title, status, dueDate, description, ++lastId);
}

function DeleteTask(id) {

    let task = GetTask(id);
    if (task !== null && task !== undefined)
        localStorage.removeItem(id);
}

function DeleteTasks(ids) {

    for (let id of ids) {
        DeleteTask(id);
    }
}

//PArse string to task


function isTaskObject(parsedItem) {

    return !(parsedItem === null || parsedItem === undefined || parsedItem.type !== "task");


}

function isJsonObject(strData) {
    try {
        JSON.parse(strData);
    } catch (e) {
        return false;
    }
    return true;
}

function isParsableToTask(item){

    if(isJsonObject(item)){
        if(isTaskObject(JSON.parse(item)))
            return true;
    }
}


export {GetTasks, GetTask, StoreTask, CreateJSTask, DeleteTask, DeleteTasks, task};