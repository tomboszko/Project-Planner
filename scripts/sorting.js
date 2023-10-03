let sortingInput = document.getElementById("sortSelect");
sortingInput.addEventListener("change", changeSorting);

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
    if ( a.days < b.days ){
      return -1;
    }
    if ( a.days > b.days ){
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

    tasks.forEach(element => {
        if (element.status == "toDo") arr1.push(element);
        if (element.status == "inProgress") arr2.push(element);
        if (element.status == "done") arr3.push(element);
    });

    switch (sortingInput.value) {
        case "Default":
            break;

        case "1":
            console.log("date");
            arr1.sort(compareDays);
            arr2.sort(compareDays);
            arr3.sort(compareDays);
            console.log(arr1);
            break;

        case "2":
            console.log("name");
            arr1.sort(compareName);
            arr2.sort(compareName);
            arr3.sort(compareName);
            console.log(arr1);
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
        if (i == arr.length - 1)
        {
            document.getElementById(status).append(document.getElementById(arr[i].id));
        }
        else
        {
            document.getElementById(status).prepend(document.getElementById(arr[i].id), document.getElementById(arr[i + 1].id));
        }
    }
}