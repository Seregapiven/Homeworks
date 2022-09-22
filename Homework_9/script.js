const toDoListEl = document.querySelector('#to-dolist');
const whatToDoEl = document.querySelector('#whattodo');
const addBtntEl = document.querySelector('#addTaskBtn');

addBtntEl.addEventListener('click', onAddTaskBtnClick);

function onAddTaskBtnClick() {

    if (!validateValues()) { 
    return;
    }
    const newTask = getValues();

    addTask(newTask);
    resetForm();
}

function getValues() {
    return whatToDoEl.value;
}
function addTask(task) {
    const rowEl = generateTaskEl(task);

    toDoListEl.append(rowEl);

}
function generateTaskEl(task) { 
    const trEl = document.createElement('tr');

    trEl.append(createCell(task));
    trEl.append(createCell(''));

    return trEl;

}
function createCell(value) { 
    const tdEl = document.createElement('td');

    tdEl.textContent = value;
    tdEl.addEventListener("click", ()=>tdEl.classList.toggle('dotodo'));
    return tdEl;

}

function resetForm() { 
    whatToDoEl.value = '';
}

function validateValues() { 
    if (whatToDoEl.value === '') { 
        return false;
    }
    return true;
}
