import {tasks} from "./task.js";

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
        if (element.status == "To Do") arr1.push(element);
        if (element.status == "In progress") arr2.push(element);
        if (element.status == "Done") arr3.push(element);
    });

    switch (filteringInput.value) {
        case "All Tasks":
            console.log("Default");
            toDoColDisplay.style.visibility = "visible";
            inProgressColDisplay.style.visibility = "visible";
            doneColDisplay.style.visibility = "visible";
            break;

        case "1":
            console.log("To Do Only");
            toDoColDisplay.style.visibility = "visible";
            inProgressColDisplay.style.visibility = "hidden";
            doneColDisplay.style.visibility = "hidden";
            break;

        case "2":
            console.log("In Progress Only");
            toDoColDisplay.style.visibility = "hidden";
            inProgressColDisplay.style.visibility = "visible";
            doneColDisplay.style.visibility = "hidden";
            break;

        case "3":
            console.log("Done Only");
            toDoColDisplay.style.visibility = "hidden";
            inProgressColDisplay.style.visibility = "hidden";
            doneColDisplay.style.visibility = "visible";
            break;

        case "4":
            console.log("Late tasks only");
            arr1 = findCorrectTiming(arr1, -Infinity, 0);
            arr2 = findCorrectTiming(arr2, -Infinity, 0);
            arr3 = findCorrectTiming(arr3, -Infinity, 0);
            reOrder = true;
            break;

        case "5":
            console.log("Urgent tasks only");
            arr1 = findCorrectTiming(arr1, 0, 5);
            arr2 = findCorrectTiming(arr2, 0, 5);
            arr3 = findCorrectTiming(arr3, 0, 5);
            reOrder = true;
            break;

        case "6":
            console.log("Not urgent only");
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