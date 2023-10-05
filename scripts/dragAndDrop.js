let draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".dropContainer");

function startDragTask(e)
{
    console.log("drag start");
    e.target.classList.add("dragging");
    console.log(e.target);
}

function endDragTask(e)
{
    console.log("drag end");
    e.target.classList.remove("dragging");
    console.log(e.target.parentNode);
}

containers.forEach(element => {
    element.addEventListener("dragover", function(e){
        e.preventDefault();
        const draggable = document.querySelector(".dragging");
        element.append(draggable);
    })
});

export {startDragTask};
export {endDragTask};