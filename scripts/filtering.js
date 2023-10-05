import {tasks} from "./task.js";
import {AddTaskToColumn} from "./generateTaskHtml.js";
import {changeSorting} from "./sorting.js";

let filteringInput = document.getElementById("filterSelect");
let toDoColDisplay = document.getElementById("toDoCol");
let inProgressColDisplay = document.getElementById("inProgressCol");
let doneColDisplay = document.getElementById("doneProgress");

// called when filter selection changed and create new arrays for each collumns if nescessary
function changeFiltering()
{
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];
    let reOrder = false;

    tasks.forEach(element => {
        if (element.status == "todo") arr1.push(element);
        if (element.status == "inprogress") arr2.push(element);
        if (element.status == "done") arr3.push(element);
    });

    switch (filteringInput.value) {
        case "All Tasks":
            toDoColDisplay.style.display = "";
            inProgressColDisplay.style.display = "";
            doneColDisplay.style.display = "";
            reOrder = true;
            break;

        case "1":
            toDoColDisplay.style.display = "";
            inProgressColDisplay.style.display = "none";
            doneColDisplay.style.display = "none";
            break;

        case "2":
            toDoColDisplay.style.display = "none";
            inProgressColDisplay.style.display = "";
            doneColDisplay.style.display = "none";
            break;

        case "3":
            toDoColDisplay.style.display = "none";
            inProgressColDisplay.style.display = "none";
            doneColDisplay.style.display = "";
            break;

        case "4":
            arr1 = findCorrectTiming(arr1, -Infinity, 0);
            arr2 = findCorrectTiming(arr2, -Infinity, 0);
            arr3 = findCorrectTiming(arr3, -Infinity, 0);
            reOrder = true;
            break;

        case "5":
            arr1 = findCorrectTiming(arr1, 0, 5);
            arr2 = findCorrectTiming(arr2, 0, 5);
            arr3 = findCorrectTiming(arr3, 0, 5);
            reOrder = true;
            break;

        case "6":
            arr1 = findCorrectTiming(arr1, 5, Infinity);
            arr2 = findCorrectTiming(arr2, 5, Infinity);
            arr3 = findCorrectTiming(arr3, 5, Infinity);
            reOrder = true;
            break;
    }

    if (reOrder)
    {
        sortTasks(arr1, "toDoCol");
        sortTasks(arr2, "inProgressCol");
        sortTasks(arr3, "doneProgress");
    }

    changeSorting();
}

// called to sort html elements
function sortTasks(arr, status)
{
    let oldCardsDisplay = document.getElementById(status).querySelectorAll(`.card`);
    oldCardsDisplay.forEach(element => {
        element.remove();
    });


    arr.forEach(element => {
        AddTaskToColumn(element);
    });
}

// used to find tasks with the correct days remaining
function findCorrectTiming(arr, min, max)
{
    let newArr = [];

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i].remainingDays > min && arr[i].remainingDays <= max)
        {
            newArr.push(arr[i]);
        }
    }

    return newArr;
}

export {changeFiltering};