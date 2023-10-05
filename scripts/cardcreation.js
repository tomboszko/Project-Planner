import {tasks, task} from "./task.js";
import {AddTaskToColumn} from "./generateTaskHtml.js";

let id = 0;


let titleInput = document.getElementById('card-titleInput');
let dueDateInput = document.getElementById('dueDate__Card1Input');
let descriptionInput = document.getElementById('descriptionCard1Input');



function AddTask() {

    let newTask = CreateJSTask();
    StoreTask(newTask);
    AddTaskToColumn(newTask);
    ClearInputForm();

}

function CreateJSTask() {


    let title = titleInput.value;
    let dueDate = new Date(dueDateInput.value);
    let description = descriptionInput.value;
    let status = displayRadioValue();

    let newTask = new task(title, status, dueDate, description, id);
    id++;
    return newTask
}

function StoreTask(task){
    tasks.push(task);
}



function ClearInputForm(){

//Empty the form
    titleInput.value = '';
    dueDateInput.value = '';
    descriptionInput.value = '';
//Hide the form
    let form = document.getElementById('cardInput');
    form.classList.toggle("d-none");
}

function displayRadioValue() {

    let element = document.getElementsByName('status');

    for (let i = 0; i < element.length; i++) {
        if (element[i].checked) {
            return element[i].value;
        }
    }

}

function preselectStatus(StatusId) {

    let form = document.getElementById('cardInput');
    document.getElementById(StatusId).checked = true;
    form.classList.toggle("d-none");

}

export {preselectStatus,AddTask}
