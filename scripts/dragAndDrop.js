import {GetTask, StoreTask, task} from "./task.js";
import {changeSorting} from "./sorting.js";

const containers = document.querySelectorAll(".dropContainer");

// called when start drag and drop
function startDragTask(e)
{
    console.log("drag start");
    e.target.classList.add("dragging");
    console.log(e.target);
}

// called when stop drag and drop = check parent collumn and change status
function endDragTask(e)
{
    e.target.classList.remove("dragging");

    let oldTask = GetTask(e.target.id);
    let status = e.target.parentNode.getAttribute("status");
    e.target.querySelector(".taskStatus").textContent = status;
    let newTask = new task(oldTask.title, status, oldTask.dueDate, oldTask.description, oldTask.id);
    StoreTask(newTask);
    changeSorting();
}

// called when element is dragged over a collumn and append it
containers.forEach(element => {
    element.addEventListener("dragover", function(e){
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        element.append(draggable);
    })
});

export {startDragTask};
export {endDragTask};