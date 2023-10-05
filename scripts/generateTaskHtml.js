import {clickEditButton} from "./editCard.js";
import {startDragTask, endDragTask} from "./dragAndDrop.js";
import {GetTasks} from "./task.js";

function GenerateTaskHtml(task){
    let taskCard = document.createElement("div");
    taskCard.classList.add("card","task","m-2","p-2", "draggable");
    taskCard.setAttribute("id",task.id);
    taskCard.setAttribute("style","max-width: 50rem;");
    taskCard.setAttribute("draggable", "true");
    taskCard.innerHTML = template;
    FulFillTaskHtml(taskCard,task);
    return taskCard;
}

let template = `<div class="row g-0">
                        <div class="col-10">
                            <div id="bodyCard1" class="card-body">

                                <h5 id="titleCard1" class="card-title taskTitle"></h5>
<<<<<<< HEAD

                                <p id="remainingTime__Card1" class="remainingTime___Text taskText mb-0 text-left"></p>

=======
>>>>>>> main
                                <p id="descriptionCard1" class="card-text cardDescription taskText"></p>

                            </div>
                        </div>
<<<<<<< HEAD
=======
                        <div class="col-4 text-end pe-2 d-flex flex-column justify-content-evenly align-items-end">
                            
                            <span id="status__Card1" class="badge taskText taskStatus "></span>
                            
                            <div class="wrapper dueTime d-flex flex-column">
                                <p id="remainingTime__Card1" class="remainingTime___Text taskText p-0 m-0"></p>
                                <p id="dueDate__Card1" class="dueDate__Text taskText p-0 m-0"></p>
                            </div>
>>>>>>> main

                        
                    

                        <div class="col-2 text-end pe-0 d-flex flex-column justify-content-around align-items-end">
                            <span id="status__Card1" class="badge taskText taskStatus "></span>
                            <p id="dueDate__Card1" class="dueDate__Text taskText p-0 m-0"></p>
                            <button id="editBtn-Card1" type="button" class="btn editButton taskText align-self-end">Edit</button>
                        </div>
                    </div>`
function FulFillTaskHtml(taskCard,task){

    let month = task.dueDate === null? 0 : task.dueDate.getMonth()+1;
    let day= task.dueDate === null? 0 : task.dueDate.getDate();

    taskCard.querySelector(".taskTitle").innerText = task.title;
    taskCard.querySelector(".taskStatus").innerText = task.status;
    taskCard.querySelector(".remainingTime___Text").innerText = task.remainingDays + " days";
    taskCard.querySelector(".cardDescription").innerText = task.description;
    taskCard.querySelector(".dueDate__Text").innerText = `Due by ${day}/${month}`;
}

function AddTaskToColumn(task){

    task.status = (task.status).trim().split(" ").join("").toLowerCase();

    let col = document.querySelector(`.column[status=${CSS.escape(task.status)}]`);
    let taskElement = GenerateTaskHtml(task);
    taskElement.querySelector(".editButton").addEventListener("click", function(){ clickEditButton(task, taskElement) });
    taskElement.addEventListener("dragstart", startDragTask);
    taskElement.addEventListener("dragend", endDragTask);
    
    if(col !== null && col !== undefined){        
        col.appendChild(taskElement);
    }
}


function DisplayAllTasks(){
    let tasks = GetTasks();
    for (let task of tasks){
        AddTaskToColumn(task);

    }
}

export{AddTaskToColumn, DisplayAllTasks}
