import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

let emailValue = form.elements.email.value;
let messageValue = form.elements.message.value;

const data = {
  email: emailValue,
  message: messageValue,
};

function onInput() {
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
if (localStorage.getItem('feedback-form-state')) {
  const getData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(getData);
  emailValue = parsedData.email;
  messageValue = parsedData.message;
} else {
  form.addEventListener('input', throttle(onInput, 500));
}

form.addEventListener('submit', onSubmit);

function onSubmit() {
  localStorage.removeItem('feedback-form-state');
  reset(form);
  console.log(data);
}
