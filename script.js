const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;

function validateForm() {
    //Using Contraint API
    isValid = form.checkValidity()
    console.log(isValid)
    // Style Main Message For An Error
    message.textContent = 'Please fill out all fields'
    message.style.color = '#E74C3D'
    messageContainer.style.borderColor = '#E74C3D'
}

function processFormData(e) {
    e.preventDefault();
    console.log(e)
    //Validate Form
    validateForm()
}

//Event Listener
form.addEventListener('submit', processFormData);