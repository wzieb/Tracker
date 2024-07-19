// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Todo: create a function to generate a unique task id
function generateTaskId() {
  nextId++;
};
//datepicker

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
  const taskEntryLS = JSON.parse(localStorage.getItem('taskEntry')) || [];
//empyting out HTML, prevents from card duplication since we're interating through the array each time in function. 
document.querySelector('#todo-cards').innerHTML='';
document.querySelector('#in-progress-cards').innerHTML='';
document.querySelector('#done-cards').innerHTML = '';

  for (let taskEntry of taskEntryLS){
    const taskCard = document.createElement('div');
    const titleEl = document.createElement('h3');
    const dueDateEl = document.createElement('h3');
    const descriptionEl = document.createElement('p');

    titleEl.innerText = taskEntry.titleValue;
    dueDateEl.innerText= taskEntry.dueDateValue;
    descriptionEl.innerText= taskEntry.descriptionValue;

    taskCard.appendChild(titleEl);
    taskCard.appendChild(dueDateEl);
    taskCard.appendChild(descriptionEl);

    //we need to create a logic to determine where this task card gets appeneded to (based on status)
    //appendChild means send here (whatever is before the period)
    if (taskEntry.status === 'todo'){
      document.querySelector('#todo-cards').appendChild(taskCard);

    } else if (taskEntry.status === 'inprogress'){
      document.querySelector('#in-progress-cards').appendChild(taskCard);
    }else {
      document.querySelector('#done-cards').appendChild(taskCard);
    }
    }
  };

// Todo: create a function to handle adding a new task
function handleAddTask(event){

};

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

};

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

};

// Todo: when the page loads - similar to DOMContentLoaded, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  renderTaskList();
  $( "#datepicker" ).datepicker();
  const addButton = document.querySelector('.addButton');
  addButton.addEventListener('click',function(){
    const titleValue = document.querySelector('.title').value;
    const dueDateValue = document.querySelector('.duedate').value;
    const descriptionValue = document.querySelector('.description').value;

    const taskEntry = {
      titleValue,
      dueDateValue,
      descriptionValue,
      status:"todo" //assigning default status of todo
    };
    const taskEntryLS = JSON.parse(localStorage.getItem('taskEntry')) || [];

    taskEntryLS.push(taskEntry);

    localStorage.setItem('taskEntry', JSON.stringify(taskEntryLS));
    renderTaskList();
  })
});
