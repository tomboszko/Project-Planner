import {RefreshRemainingDays} from "./scripts/remainingDays.js";
// import {tasks,task} from "./scripts/task.js";
// import{AddTaskToColumn} from "./scripts/generateTaskHtml.js";
import {AddTask,preselectStatus} from "./scripts/cardcreation.js";
import {changeSorting} from "./scripts/sorting.js";
import {changeFiltering} from "./scripts/filtering.js";

RefreshRemainingDays();

let sortingInput = document.getElementById("sortSelect");
sortingInput.addEventListener("change", changeSorting);

let filteringInput = document.getElementById("filterSelect");
filteringInput.addEventListener("change", changeFiltering);


let addItemToDo = document.getElementById('addToDo');
addItemToDo.addEventListener('click', function () {
    preselectStatus('InputToDo');

});

let addItemInProgress = document.getElementById('addInProgress');
addItemInProgress.addEventListener('click', function () {
    preselectStatus('InputInProgress');

});

let addItemDone = document.getElementById('addDone');
addItemDone.addEventListener('click', function () {
    preselectStatus('InputDone');

});

let submit = document.getElementById('addTask');
submit.addEventListener('click', AddTask);



// tasks.push(
//     new task("title1","todo",new Date(2025,1,25),"blablabla",1),
//     // new task("title2","inprogress",new Date(2023,11,30),"blablabla",2),
//     // new task("title3","done",new Date(2024,1,25),"blablabla",3),
//     // new task("title4","todo",new Date(2023,11,24),"blablabla",4),
//     )
//
//
//     //Code For Test
//  for(let c of tasks){
//      AddTaskToColumn(c);
//  }