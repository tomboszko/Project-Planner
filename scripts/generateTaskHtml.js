function GenerateTaskHtml(task){
    let taskCard = document.createElement("div");
    taskCard.classList.add("card","task");
    taskCard.setAttribute("id",task.id);
    taskCard.setAttribute("style","width: 18rem;");
    taskCard.innerHTML = template;
    FulFillTaskHtml(taskCard,task);
    return taskCard;
}

let template = `<div class="card-header">
                        <h5 id="titleCard1" class="card-title taskTitle"></h5>
                        <span id="status__Card1" class="badge text-bg-primary taskStatus"></span>
                        <p id="remainingTime__Card1" class="remainingTime___Text"></p>
                    </div>
                    <div id="bodyCard1" class="card-body">
                        <p id="descriptionCard1" class="card-text cardDescription"></p>
                    </div>
                    <div class="card-footer">
                        <p id="dueDate__Card1" class="dueDate__Text"></p>
                        <button id="editBtn-Card1" type="button" class="btn editButton">Edit</button>
                    </div>`
function FulFillTaskHtml(taskCard,task){
    
   taskCard.querySelector(".taskTitle").innerText = task.title;
   taskCard.querySelector(".taskStatus").innerText = task.status;
   taskCard.querySelector(".remainingTime___Text").innerText = task.remainingDays + "remaining days";
   taskCard.querySelector(".cardDescription").innerText = task.description;
   taskCard.querySelector(".dueDate__Text").innerText = task.dueDate.toDateString();
}

function AddTaskToColumn(task){
    
    let statusValue = (task.status).trim().split(" ").join("").toLowerCase();
    
    let col = document.querySelector(`.col[status=${CSS.escape(statusValue)}]`);
    let taskElement = GenerateTaskHtml(task);
    
    if(col !== null && col !== undefined){        
        col.appendChild(taskElement);
    }
}

export{AddTaskToColumn}
