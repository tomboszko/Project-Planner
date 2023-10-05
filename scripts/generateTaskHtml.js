import {clickEditButton} from "./editCard.js";

function GenerateTaskHtml(task){
    let taskCard = document.createElement("div");
    taskCard.classList.add("card","task","m-2","p-2");
    taskCard.setAttribute("id",task.id);
    taskCard.setAttribute("style","max-width: 50rem;");
    taskCard.innerHTML = template;
    FulFillTaskHtml(taskCard,task);
    return taskCard;
}

let template = `<div class="row g-0 mt-0">
                        <div class="col-7">
                            <div id="bodyCard1" class="card-body">
                                <h5 id="titleCard1" class="card-title taskTitle"></h5>
                                <p id="dueDate__Card1" class="dueDate__Text taskText p-0 m-0"></p>
                                <p id="descriptionCard1" class="card-text cardDescription taskText"></p>
                            </div>
                        </div>
                        <div class="col-4">
                        <div class="wrapper dueTime d-flex flex-column">
                        
                        
                    </div></div>
                        <div class="col-1 text-end pe-0 d-flex flex-column justify-content-around align-items-end">
                            
                            <span id="status__Card1" class="badge taskText taskStatus "></span>
                            <p id="remainingTime__Card1" class="remainingTime___Text taskText p-0 m-0"></p>
                          

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
    taskElement.querySelector(".editButton").addEventListener("click", function(){ clickEditButton(task, taskElement) });
    
    if(col !== null && col !== undefined){        
        col.appendChild(taskElement);
    }
}

export{AddTaskToColumn}
