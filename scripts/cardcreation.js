

function createTask(cardElement) {
    let title = cardElement.querySelector('.card-title').textContent;
    let status = cardElement.querySelector('.badge').textContent;
    let dueDate = cardElement.querySelector('.dueDate__Text').textContent;
    let description = cardElement.querySelector('.card-text').textContent;
    let id = cardElement.id;

    return new task(title, status, dueDate, description, id);
}

function addItemToDo() {
 
    document.getElementById('addToDo').addEventListener('click', function () {

        document
        


    
 
});


}

