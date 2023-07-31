import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
let emailValue = '';
let messageValue = '';

const data = {
  email: emailValue,
  message: messageValue,
};
form.addEventListener('input', throttle(onInput, 500));

function onInput(event) {
  console.log(event.target.value);
  emailValue = event.target.value;
  messageValue = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
}
if (localStorage.getItem('feedback-form-state')) {
  const getData = localStorage.getItem('feedback-form-state');
  const parsedData = JSON.parse(getData);
  data.email = parsedData.email;
  data.message = parsedData.message;
}

form.addEventListener('submit', onSubmit);

function onSubmit() {
  localStorage.removeItem('feedback-form-state');
  reset(form);
  console.log(data);
}
