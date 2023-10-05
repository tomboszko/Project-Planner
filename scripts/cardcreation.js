import {tasks, task} from "./task.js";
import {AddTaskToColumn} from "./generateTaskHtml.js";

let id = 0;


// function createTask(cardElement) {
//
//     let title = cardElement.querySelector('.card-title').textContent;
//     let status = cardElement.querySelector('.badge').textContent;
//     let dueDate = cardElement.querySelector('.dueDate__Text').textContent;
//     let description = cardElement.querySelector('.card-text').textContent;
//     let id = cardElement.id;
//
//     return new task(title, status, dueDate, description, id);
// }

function preselectStatus(StatusId) {

    let form = document.getElementById('cardInput');
    document.getElementById(StatusId).checked = true;
    form.classList.toggle("d-none");

}
function addTaskForm() {


    let titleInput = document.getElementById('card-titleInput');
    let dueDateInput = document.getElementById('dueDate__Card1Input');
    let descriptionInput = document.getElementById('descriptionCard1Input');


    let title = titleInput.value;
    let dueDate = new Date(dueDateInput.value);
    let description = descriptionInput.value;
    let status = displayRadioValue();


    let newTask = new task(title, status, dueDate, description, id);
    id++;
    tasks.push(newTask);
    AddTaskToColumn(newTask);


    titleInput.value = '';
    dueDateInput.value = '';
    descriptionInput.value = '';

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

export {preselectStatus,addTaskForm}
