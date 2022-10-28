import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';

const formData = {}

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

textareaValue();

refs.form.addEventListener('submit', onFormSubmit);

refs.form.addEventListener('input', throttle(evt => {
    formData[evt.target.name] = evt.target.value;
    console.log(formData)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}), 500);

function onFormSubmit(event) {
    event.preventDefault();
    if (refs.input.value === "" || refs.textarea.value === "") {
        alert("Please fill in all the fields!");
    }

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function textareaValue() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (savedMessage) {        
        refs.input.value = savedMessage.email;
        refs.textarea.value = savedMessage.message;
    }
}