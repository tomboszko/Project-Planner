
function createTask(cardElement) {

    let title = cardElement.querySelector('.card-title').textContent;
    let status = cardElement.querySelector('.badge').textContent;
    let dueDate = cardElement.querySelector('.dueDate__Text').textContent;
    let description = cardElement.querySelector('.card-text').textContent;
    let id = cardElement.id;

    return new task(title, status, dueDate, description, id);
}


function addTaskForm() {

    let titleInput = document.getElementById('card-titleInput');
    let dueDateInput = document.getElementById('dueDate__Card1Input');
    let descriptionInput = document.getElementById('descriptionCard1Input');
    let statusInput =document.getElementById('status__Card1Input');


    let title = titleInput.value;
    let dueDate = dueDateInput.value;
    let description = descriptionInput.value;
    let status = statusInput.value;

    let newTask = new task(title, status, dueDate, description, 'id');
    tasks.push(newTask);

    titleInput.value = '';
    dueDateInput.value = '';
    descriptionInput.value = '';
}

let addButton = document.querySelector('.addTask');
addButton.addEventListener('click', addTaskForm());




