import {StoreTask, CreateJSTask} from "./task.js";
import {AddTaskToColumn} from "./generateTaskHtml.js";


let titleInput = document.getElementById('card-titleInput');
let dueDateInput = document.getElementById('dueDate__Card1Input');
let descriptionInput = document.getElementById('descriptionCard1Input');


function AddTask(event) {

    event.preventDefault();
    let newTask = CreateTask();
    StoreTask(newTask);
    AddTaskToColumn(newTask);
    ClearInputForm();

}

function CreateTask() {

    let title = titleInput.value;
    let dueDate = new Date(dueDateInput.value);
    let description = descriptionInput.value;
    let status = displayRadioValue().trim().split(" ").join("").toLowerCase();


    return CreateJSTask(title,status,dueDate,description);  
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


export {preselectStatus,AddTask, ClearInputForm}
