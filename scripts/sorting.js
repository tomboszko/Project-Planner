import {GetTasks} from "./task.js";

let sortingInput = document.getElementById("sortSelect");

// compare titles for tasks sorting by name
function compareName( a, b ) 
{
    if ( a.title < b.title ){
      return -1;
    }
    if ( a.title > b.title ){
      return 1;
    }
    return 0;
}

// compare days for tasks sorting by remaining days
function compareDays( a, b ) 
{
    if ( a.remainingDays < b.remainingDays ){
      return -1;
    }
    if ( a.remainingDays > b.remainingDays ){
      return 1;
    }
    return 0;
}

// called when sorting selection changed and create new arrays for each collumns
function changeSorting()
{
    let arr1 = [];
    let arr2 = [];
    let arr3 = [];

    GetTasks().forEach(element => {
        if (element.status === "todo") arr1.push(element);
        if (element.status === "inprogress") arr2.push(element);
        if (element.status === "done") arr3.push(element);
    });

    switch (sortingInput.value) {
        case "Default":
            break;

        case "1":
            arr1.sort(compareDays);
            arr2.sort(compareDays);
            arr3.sort(compareDays);
            break;

        case "2":
            arr1.sort(compareName);
            arr2.sort(compareName);
            arr3.sort(compareName);
            break;
    }

    sortTasks(arr1, "toDoCol");
    sortTasks(arr2, "inProgressCol");
    sortTasks(arr3, "doneProgress");
}

// called to sort html elements
function sortTasks(arr, status)
{
    for (let i = 0; i < arr.length; i++) 
    {
        if (document.getElementById(arr[i].id) != null)
        {
            document.getElementById(status).append(document.getElementById(arr[i].id));
        }
    }
}

export {changeSorting};