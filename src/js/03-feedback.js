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
    localStorage.setItem(STORAGE_KEY, JSON.parse(formData))
}), 500);

function onFormSubmit(event) {
    event.preventDefault();

    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY)
}

function textareaValue() {
    const savedMessage = localStorage.getItem(STORAGE_KEY)
    if (savedMessage) {
        const { email, message } = formData;
        refs.input.value = email;
        refs.textarea.value = message;
    }
}