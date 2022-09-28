const DELETE_DATA = 'delete-btn';

const contactsListEl = document.querySelector('#contactsList');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');
const errorContainerEl = document.querySelector('#errorContainer');
const valid = document.querySelector('#valid');

const taskITemTemplate = document.querySelector('#contactItemTemplate').innerHTML;

addBtnEl.addEventListener('click', onAddContactBtnClick)
contactsListEl.addEventListener('click', onListClick);
valid.addEventListener('input', onValidInput);


function onAddContactBtnClick(){
    if (!validateInput()) return;

    const newContact = getValues();

    addContact(newContact);
    resetForm();
    
}

function validateInput() {
    const value = {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
    
    return validateValue(value);

}

function getValues(){
    return {
        name: nameEl.value,
        surname: surnameEl.value,
        phone: phoneEl.value,
    }
}

function addContact(contact) {
    
    const contactHtml = generateContactHtml(contact);
    contactsListEl.insertAdjacentHTML('beforeEnd', contactHtml);
}

function generateContactHtml(contact) {
    let template = taskITemTemplate
        .replaceAll('{{name}}', contact.name)
        .replaceAll('{{surname}}', contact.surname)
        .replaceAll('{{phone}}', contact.phone);
    return template;
}

function onListClick(event) {
    if (event.target.classList.contains(DELETE_DATA)) {
        deleteUserData(event.target.parentElement.parentElement);
    }
}

function deleteUserData(contact) {
    contact.remove();
}

function resetForm(){
    nameEl.value = '';
    surnameEl.value = '';
    phoneEl.value = '';
}

function onValidInput() {
    validateInput();
}

function validateValue(value) {
    if (value.name === "" || value.surname === "" || value.phone === ""  ) {
        errorContainerEl.textContent = "Ошибка! Заполните все поля форм!";
        addBtnEl.disabled = true;
        return false;
    } else {
        errorContainerEl.textContent = '';
        addBtnEl.disabled = false;
        return true;
    }
}
