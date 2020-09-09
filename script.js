const form = document.getElementById('form');
const password1Element = document.getElementById('password1');
const password2Element = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Use HTML constraint API to check form validity
    isValid = form.checkValidity()
    // Style Main Message For An Error
    if (!isValid) {
        message.textContent = 'Please fill out all fields.'
        message.style.color = '#E74C3D'
        messageContainer.style.borderColor = '#E74C3D'
        return
    }
    //Check to see if Password match
    if (password1Element.value === password2Element.value) {
        passwordsMatch = true;
        password1Element.style.borderColor = '#2FCC71'
        password2Element.style.borderColor = '#2FCC71'
    }else {
        passwordsMatch = false
        message.textContent = 'Make sure passwords match.'
        message.style.color = '#E74C3D'
        messageContainer.style.borderColor = '#E74C3D'
        password1Element.style.borderColor = '#E74C3D'
        password2Element.style.borderColor = '#E74C3D'
        return
    }
    //If form is valid and password match
    if(isValid && passwordsMatch) {
        message.textContent = 'Successfully Registered!'
        message.style.color = '#2FCC71'
        messageContainer.style.borderColor = '#2FCC71'
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
      };
    // Do Something with user data
    console.log(user)
}

function processFormData(e) {
    e.preventDefault();
    //console.log(e)
    //Validate Form
    validateForm()
    //Submit Data if Valid
    if(isValid && passwordsMatch) {
        storeFormData()
    }
}

//Event Listener
form.addEventListener('submit', processFormData);