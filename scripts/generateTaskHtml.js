import {clickEditButton} from "./editCard.js";
import {GetTasks} from "./task.js";

function GenerateTaskHtml(task){
    let taskCard = document.createElement("div");
    taskCard.classList.add("card","task","m-2","p-2");
    taskCard.setAttribute("id",task.id);
    taskCard.setAttribute("style","max-width: 50rem;");
    taskCard.innerHTML = template;
    FulFillTaskHtml(taskCard,task);
    return taskCard;
}

let template = `<div class="row g-0 mt-2">
                        <div class="col-8">
                            <div id="bodyCard1" class="card-body">
                                <h5 id="titleCard1" class="card-title taskTitle"></h5>
                                <p id="descriptionCard1" class="card-text cardDescription taskText"></p>
                            </div>
                        </div>
                        <div class="col-4 text-end pe-2 d-flex flex-column justify-content-evenly align-items-end">
                            
                            <span id="status__Card1" class="badge taskText taskStatus "></span>
                            
                            <div class="wrapper dueTime d-flex flex-column">
                                <p id="remainingTime__Card1" class="remainingTime___Text taskText p-0 m-0"></p>
                                <p id="dueDate__Card1" class="dueDate__Text taskText p-0 m-0"></p>
                            </div>

                            <button id="editBtn-Card1" type="button" class="btn editButton taskText align-self-end">Edit</button>
                        </div>
                    </div>`
function FulFillTaskHtml(taskCard,task){
    
    let month = task.dueDate.getMonth()+1;
    let day= task.dueDate.getDate()
    
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
    
    if(col !== null && col !== undefined){        
        col.appendChild(taskElement);
    }
}

export{AddTaskToColumn}
