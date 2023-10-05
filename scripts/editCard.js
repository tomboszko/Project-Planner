import {GetTasks, DeleteTask, GetTask, StoreTask, task} from "./task.js";
import {ComputeRemainingDays} from "./remainingDays.js";
import {changeSorting} from "./sorting.js";

let form = document.getElementById('cardEdit');
let taskToEdit;
let cardToEdit;
let tasks = [];
let id;

// function to call when edit button clicked
function clickEditButton(task, card)
{
    form.classList.toggle("d-none");
    id = task.id;
    tasks = GetTasks();
    taskToEdit = GetTask(id);
    cardToEdit = card;
    generateForm(task);
    console.log(tasks);
}

// called to generate the edit form
function generateForm()
{
    let titleInput = document.getElementById("edit-titleInput");
    let dateInput = document.getElementById("editDueDate");
    let descriptionInput = document.getElementById("editDescription");

    titleInput.value = taskToEdit.title;
    displayRadioValue(taskToEdit.status);
    dateInput.value = taskToEdit.dueDate == "Invalid Date" ? "" : taskToEdit.dueDate.toISOString().substring(0, 10);
    descriptionInput.value = taskToEdit.description;
}

function displayRadioValue(status) 
{
    switch (status) {
        case "todo":
            document.getElementById("EditInputToDo").checked = true;
            break;
        case "inprogress":
            document.getElementById("EditInputInProgress").checked = true;
            break;
        case "done":
            document.getElementById("EditInputDone").checked = true;
            break;
    }
}

let validateButton = document.getElementById("editTask");
let deleteButton = document.getElementById("deleteTask");

validateButton.addEventListener("click", editTask)
deleteButton.addEventListener("click", deleteTask);

// called to validate the edit and make all the changes in card and array of tasks
function editTask()
{
    console.log("edit task");

    let titleInput = document.getElementById("edit-titleInput");
    let dateInput = document.getElementById("editDueDate");
    let descriptionInput = document.getElementById("editDescription");

    let title = titleInput.value;
    let dueDate = new Date(dateInput.value);
    let description = descriptionInput.value;
    let status = findRadioValue();
    let remainingDays = ComputeRemainingDays(dueDate);
    let month = dueDate.getMonth()+1;
    let day= dueDate.getDate()

    let newTask = new task(title, status, dueDate, description, id);
    StoreTask(newTask);

    cardToEdit.querySelector(".card-title").textContent = title;
    cardToEdit.querySelector(".card-text").textContent = description;
    cardToEdit.querySelector(".taskStatus").textContent = status;
    cardToEdit.querySelector(".remainingTime___Text").textContent = remainingDays + " days";
    cardToEdit.querySelector(".dueDate__Text").textContent = `Due by ${day}/${month}`;

    changeSorting();

    titleInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';

    form.classList.toggle("d-none");
}

function findRadioValue() 
{
    let element = document.getElementsByName('editStatus');

    for (let i = 0; i < element.length; i++) 
    {
        if (element[i].checked) 
        {
            return element[i].value;
        }
    }
}

// called to delete the task
function deleteTask()
{
    DeleteTask(id)
    cardToEdit.remove();

    form.classList.toggle("d-none");
}

export {clickEditButton};