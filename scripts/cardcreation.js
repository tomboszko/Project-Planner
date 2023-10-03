

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

    let title = document.getElementById('titleCard1').value;
    let status = document.getElementById('status__Card1').value;
    let dueDate = document.ggetElementById('remainingTime__Card1').value;
    let description = document.getElementById('descriptionCard1').value;

    

 
});


}

