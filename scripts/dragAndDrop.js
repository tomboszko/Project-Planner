let draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".dropContainer");

console.log(containers);

console.log(draggables);

draggables.forEach(element => {
    element.addEventListener("dragstart", function(){
        console.log("drag start");
    })
});

function startDragTask()
{
    console.log("drag start");
}

export {startDragTask};