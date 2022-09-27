const DELETE_DATA = 'delete-btn';

const contactsListEl = document.querySelector('#contactsList');
const nameEl = document.querySelector('#name');
const surnameEl = document.querySelector('#surname');
const phoneEl = document.querySelector('#phone');
const addBtnEl = document.querySelector('#addContactBtn');
const taskITemTemplate = document.querySelector('#contactItemTemplate').innerHTML;

addBtnEl.addEventListener('click', onAddContactBtnClick)
contactsListEl.addEventListener('click', onListClick);


function onAddContactBtnClick(){

    if (!validateValues()){
        return;
    }

    const newContact = getValues();

    addContact(newContact);
    resetForm();
    
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

function validateValues(){
    resetValidation();
    
    if (nameEl.value === '') {
        nameEl.classList.add('invalid-input');
        return false
    };

    if (surnameEl.value === '') {
        surnameEl.classList.add('invalid-input');
        return false
    };

    if (phoneEl.value === '') {
        phoneEl.classList.add('invalid-input');
        return false
    };

    return true
}

function resetValidation(){
    nameEl.classList.remove('invalid-input');
    surnameEl.classList.remove('invalid-input');
    phoneEl.classList.remove('invalid-input');
}