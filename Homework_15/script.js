const TASK_ITEM_CLASS = 'task-item';
const TASK_DONE_CLASS = 'task-done';
const DELETE_BTN_CLASS = 'delete-btn';
const ON = 'on';

const idEl = document.querySelector('#id');
const taskListEl = document.querySelector('#taskList');
const taskNameInput = document.querySelector('#taskNameInput');
const newTaskForm = document.querySelector('#newTaskForm');
const errorContainerEl = document.querySelector('#errorContainer');
const taskITemTemplate = document.querySelector('#todoItemTemplate').innerHTML;

newTaskForm.addEventListener('submit', onNewTaskSubmit);
taskNameInput.addEventListener('input', onTaskNameInput);
taskListEl.addEventListener('click', onListClick);

let list = [];

init();

function onNewTaskSubmit(event) {
    event.preventDefault();
    if (!validateInput()) return;
    const newTask = getFormData();
    saveTask(newTask);
    resetForm();
}

function onListClick(e) {
    if (e.target.classList.contains(DELETE_BTN_CLASS)) {
        const taskId = getTaskId(e.target.parentElement);
        deleteTask(taskId);
    }
    else if (e.target.classList.contains(TASK_ITEM_CLASS)) {
        toggleTodo(e.target);
        const taskId = getTaskId(e.target);
        changeCondition(taskId, ON);
           }
    else if (e.target.classList.contains(TASK_DONE_CLASS)) {
        toggleTodo(e.target);
        const taskId = getTaskId(e.target);
        changeCondition(taskId)
    }
}

function init() {
    fetchContacts();
    renderTaskList(list);
}

function fetchContacts() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        .then((res) => res.json())
        .then((data) => {
            list = data;
            list.forEach(checkClass);
            renderTaskList(list);
        });
}
function checkClass(task) {
    task.completed ? task.completed = TASK_DONE_CLASS : task.completed = TASK_ITEM_CLASS;
}

function renderTaskList(list) {
    taskListEl.innerHTML = '';
    list.forEach(renderTask);
}

function renderTask(task) {
    const todoHtml = getTodoHtml(task);
    taskListEl.insertAdjacentHTML('beforeend', todoHtml);
}

function getTodoHtml({ id, title, completed }) {
    return taskITemTemplate
    .replaceAll('{{id}}', id)
    .replaceAll('{{title}}', title)
    .replaceAll('{{completed}}', completed);
}

function saveTask(task) {
    if (!task.id) {
        addTask(task);
    }
}

function addTask(task) {
    task.id = Date.now();
    list.push(task);
    renderTaskList(list);
}

function deleteTask(id) {
    list = list.filter((item) => item.id !== id);
    renderTaskList(list);
}

function getTaskId(elem) {
    return +elem.dataset.taskId;
}

function onTaskNameInput() {
    validateInput();
}

function validateInput() {
    const value = taskNameInput.value;
    return validateValue(value);
}

function getFormData() {
    return {
        title: taskNameInput.value,
        completed:TASK_ITEM_CLASS
    }
}

function resetForm() {
    taskNameInput.value = '';
}

function toggleTodo(todoEl) {
    todoEl.classList.toggle(TASK_DONE_CLASS);
}

function validateValue(value) {
    if (value === '') {
        errorContainerEl.textContent = 'Todo Name is required';
        submitBtn.disabled = true;
        return false;
    } else {
        errorContainerEl.textContent = '';
        submitBtn.disabled = false;
        return true;
    }
}

function changeCondition(id,completed){
    const task = list.find((item) => item.id === id);
    if (completed === ON) {
        task.completed = TASK_DONE_CLASS;
    } else {
        task.completed = TASK_ITEM_CLASS;
    }
    renderTaskList(list);
}