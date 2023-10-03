function GenerateTaskHtml(task){
    let taskCard = document.createElement("div");
    taskCard.classList.add("card","task");
    taskCard.setAttribute("id",task.id);
    taskCard.setAttribute("style","width: 18rem;");
    taskCard.innerHTML = FulFillTaskHtml(task);
    return taskCard;
}
function FulFillTaskHtml(task){
    
    return `<div class="card-header">
                        <h5 id="titleCard1" class="card-title">${task.title}</h5>
                        <span id="status__Card1" class="badge text-bg-primary">${task.status}</span>
                        <p id="remainingTime__Card1" class="remainingTime___Text">${task.remainingDays} remaining days</p>
                    </div>
                    <div id="bodyCard1" class="card-body">
                        <p id="descriptionCard1" class="card-text">${task.description}</p>
                    </div>
                    <div class="card-footer">
                        <p id="dueDate__Card1" class="dueDate__Text">${task.dueDate.toDateString()}</p>
                        <button id="editBtn-Card1" type="button" class="btn editButton">Edit</button>
                    </div>`
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
